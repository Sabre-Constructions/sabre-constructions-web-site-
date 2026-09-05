# The rules

> Every one of these came from something that actually went wrong, or something
> that would have. They are short because they matter.

## 1. Never invent a number

No years, job counts, prices, star ratings, review counts, percentages or
timeframes unless they appear in `client-facts.md` with a source.

**Why:** made-up numbers on a business's own website are misleading conduct under
Australian Consumer Law. Sabre carries the risk, not whoever typed it.

**If you need a number that isn't in the file:** ask Sabre, get the answer, add
it to `client-facts.md` with where it came from, then use it.

## 2. The rating is 4.5 from 11 — never round it up

There is one genuine 1-star review. That is why it is 4.5.

**Why:** rounding a rating up is a specific, well-known trigger for ACCC action.
Half a star is not worth it. And 4.5 with a real review count reads as more
honest than a suspiciously perfect 5 anyway.

## 3. Never put a person on this site who isn't real

No stock photo models presented as clients or staff. No AI-generated people. No
invented testimonials or names.

**Why:** a visitor reads any group photo on a builder's site as that builder's
staff, and any face beside a quote as that customer. Presenting invented people
as real customers or employees is the same legal problem as rule 1, and it is the
fastest way to lose trust if anyone works it out.

**This one has been broken before.** An earlier draft of this site used
AI-generated testimonial videos and an AI team photo as placeholders. They were
labelled, and they were removed. Do not reintroduce anything like them.

## 4. Never break the enquiry form silently

If you change anything about the contact form, **send a real test enquiry and
confirm it arrives** before you consider the job done. Then deliberately break it
and confirm the page shows an **error** rather than a success message.

**Why:** a form that says "thanks, we'll be in touch" and sends nothing is worse
than no form at all. The customer thinks they have contacted you. They go
elsewhere when nobody calls back. You never find out it happened.

This exact fault existed in an earlier version of this site.

## 5. Never add noindex unless you mean to disappear from Google

The tag looks like this:

    <meta name="robots" content="noindex, nofollow">

It tells Google to remove the page from search results. It was on every page
while the site was a private preview. If one is still there, delete it.

## 6. Never delete a page address

If a page exists at `/gallery/` and you remove it, Google drops that address and
any ranking attached to it.

**If a page is no longer wanted:** keep the address and make the page shorter, or
point it somewhere sensible. Do not just delete the folder.

## 7. Never show a house that isn't yours

AI image tools can produce a photo-real "finished home" from almost nothing. On a
builder's website, every house on the page reads as **a house you built**.

**Allowed:**

- Upscaling or cleaning up a real photo of a real Sabre job. Non-generative
  tools only — they sharpen what is there, they do not invent architecture
- A before-and-after visualisation built from **your own photo of the actual
  block**, using **your own design**, clearly labelled as a visualisation

**Not allowed:**

- A generated "after" of a design Sabre does not own. The rebuild visualisation
  made earlier was derived from another practice's elevation, and it is blocked
  from publication until that designer gives written permission
- Any generated home presented as a completed Sabre build
- A street address or an owner's name on any visualisation, ever

**Why:** showing someone else's design as your work is a copyright problem and a
professional one. Showing a generated house as a real build is the same
misleading conduct as rule 3, just with bricks instead of faces.

## 8. Never start a path with a slash

Write `../css/site.css`. Never `/css/site.css`.

**Why:** the leading-slash version works on some setups and silently breaks on
others. You will not notice until the live site loses its styling.
