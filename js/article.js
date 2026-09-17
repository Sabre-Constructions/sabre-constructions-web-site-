/* Sabre article pages: highlight the "On this page" rail entry for the section in view. v1 */
(function () {
  var links = [].slice.call(document.querySelectorAll('.art-side .onpage a[href^="#"]'));
  if (!links.length) return;
  var heads = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
  function update() {
    var y = window.scrollY + 130, cur = heads[0];
    for (var i = 0; i < heads.length; i++) { if (heads[i].offsetTop <= y) cur = heads[i]; }
    links.forEach(function (a) { a.parentNode.classList.toggle('on', a.getAttribute('href') === '#' + cur.id); });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
