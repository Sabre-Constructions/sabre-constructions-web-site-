/* Sabre Constructions — enquiry form + campaign capture.
   Loaded on every page. Three jobs:
   1. Remember where the visitor came from (utm_*, fbclid, gclid, the first page
      they landed on) for the whole visit, so an ad click that lands on /wynnum/
      still carries its code when they enquire on /contact/.
   2. Run the three-step form (one question at a time) on any page that has it.
   3. On submit: copy the ledger row to the Zoho Flow webhook (if FLOW_URL is set),
      then send the enquiry to Formspree exactly as before. Formspree keeps doing
      the email to admin@; the Flow keeps the record.
   Without this file the form still works as a plain POST (all steps shown).
   After ANY edit: node --check js/enquiry.js, then bump ?v= on every page. */
(function () {
  'use strict';

  /* Paste the Zoho Flow webhook URL here when Flow 1 exists (see the workshop
     repo: docs/tasks/lead-ledger-build.md). Empty string = no copy is sent. */
  var FLOW_URL = '';

  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];
  var STORE = 'sabre_touch';

  /* ---------- 1. capture ---------- */
  function readStore() {
    try { return JSON.parse(sessionStorage.getItem(STORE) || '{}') || {}; } catch (e) { return {}; }
  }
  function capture() {
    var saved = readStore(), changed = false, params;
    try { params = new URL(window.location.href).searchParams; } catch (e) { return saved; }
    KEYS.forEach(function (k) {
      var v = params.get(k);
      if (v) { saved[k] = v.slice(0, 200); changed = true; }
    });
    if (!saved.landing_page) {
      saved.landing_page = window.location.href.split('#')[0].slice(0, 500);
      saved.referrer = (document.referrer || '(direct)').slice(0, 500);
      changed = true;
    }
    if (changed) { try { sessionStorage.setItem(STORE, JSON.stringify(saved)); } catch (e) {} }
    return saved;
  }
  var touch = capture();
  var openedAt = Date.now();

  /* ---------- 2. the form ---------- */
  var f = document.getElementById('enquiry');
  if (!f) return;
  var s = document.getElementById('formStatus');

  function setHidden(name, val) {
    var el = f.querySelector('input[type=hidden][name="' + name + '"]');
    if (!el) { el = document.createElement('input'); el.type = 'hidden'; el.name = name; f.appendChild(el); }
    el.value = val == null ? '' : String(val);
  }
  KEYS.forEach(function (k) { setHidden(k, touch[k] || ''); });
  setHidden('landing_page', touch.landing_page || '');
  setHidden('referrer', touch.referrer || '');
  setHidden('page', window.location.pathname);
  setHidden('fill_seconds', '');

  var wiz = document.getElementById('wiz');
  if (wiz) {
    var steps = wiz.querySelectorAll('.wiz-step'), n = document.getElementById('wizN'), cur = 0;
    var go = function (k) {
      if (k < 0 || k >= steps.length) return;
      Array.prototype.forEach.call(steps, function (st, i) {
        st.classList.toggle('on', i === k);
        st.classList.toggle('prev', i < k);
      });
      cur = k;
      if (n) n.textContent = k + 1;
      var first = steps[k].querySelector('input:not([type=radio]):not([type=hidden]),select');
      if (first && k === steps.length - 1) setTimeout(function () { first.focus(); }, 450);
    };
    Array.prototype.forEach.call(f.querySelectorAll('input[name=describes]'), function (r) {
      r.addEventListener('change', function () { setTimeout(function () { go(1); }, 260); });
    });
    Array.prototype.forEach.call(f.querySelectorAll('input[name=built]'), function (r) {
      r.addEventListener('change', function () { setTimeout(function () { go(2); }, 260); });
    });
    Array.prototype.forEach.call(f.querySelectorAll('[data-back]'), function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); go(cur - 1); });
    });
    go(0);
  }

  /* ---------- 3. submit ---------- */
  function ledgerRow() {
    var row = new URLSearchParams();
    row.append('submitted_at', new Date().toISOString());
    new FormData(f).forEach(function (v, k) {
      if (k.charAt(0) === '_') return;            /* Formspree's own fields + the honeypot */
      row.append(k, String(v).slice(0, 500));
    });
    return row;
  }
  function beacon() {
    if (!FLOW_URL) return;
    try {
      /* form-encoded = a "simple" request: no CORS preflight, and Zoho Flow's
         webhook trigger reads it as "form data". */
      if (navigator.sendBeacon && navigator.sendBeacon(FLOW_URL, ledgerRow())) return;
      fetch(FLOW_URL, { method: 'POST', mode: 'no-cors', keepalive: true, body: ledgerRow() });
    } catch (e) {}
  }

  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var b = f.querySelector('button[type=submit]') || f.querySelector('button');
    setHidden('fill_seconds', Math.round((Date.now() - openedAt) / 1000));
    if (b) b.disabled = true;
    if (s) { s.className = 'status'; s.textContent = 'Sending…'; }
    beacon();
    fetch(f.action, { method: 'POST', body: new FormData(f), headers: { 'Accept': 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function () {
        if (s) { s.className = 'status ok'; s.textContent = 'Thanks. Nathan will ring to set a time that suits the family.'; }
        f.reset();
      })
      .catch(function () {
        if (s) { s.className = 'status err'; s.textContent = "That didn't send. Please call 0422 831 306."; }
        if (b) b.disabled = false;
      });
  });
})();
