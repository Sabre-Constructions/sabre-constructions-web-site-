# Sabre Constructions — the website

> **Read this first, every time.** It tells you where everything is and what you
> must not do. If you are an AI assistant helping Nathan change this website,
> this file is your starting point and the rules below are not optional.

## What this is

The website for **Sabre Constructions**, a family-owned builder in Capalaba QLD,
building across Brisbane's Bayside and the Redlands since 1990.

It is a **static website**. That means it is just files — HTML, CSS, images.
There is no WordPress, no Joomla, no database, no admin login, no plugins to
update. You change a file, you save it, the website changes. Nothing can break in
the background because there is nothing running in the background.

It is published free by **GitHub Pages** and lives at
**sabreconstructions.com.au**.

## Where things are

```
CLAUDE.md            you are here — read first
index.html           the home page
contact/             the contact page + enquiry form
designs/             home designs
gallery/             finished builds
meet-the-team/       the people
testimonials/        Google reviews
css/site.css         all the styling, one file
js/                  scripts
assets/img/          photos
docs/                everything you need to know — see below
```

## Which doc to open

| You want to... | Open |
|---|---|
| **Check a fact before putting it on the page** | `docs/client-facts.md` |
| **Know the rules you must not break** | `docs/rules.md` |
| Match the colours, fonts or spacing | `docs/design-system.md` |
| Understand how the site gets published | `docs/how-it-works.md` |
| Change something without breaking it | `docs/making-changes.md` |

## The six rules — read `docs/rules.md` before editing

1. **Never invent a number.** No years, job counts, prices, star ratings or
   review counts unless they are in `docs/client-facts.md` with a source.
2. **The Google rating is 4.5 from 11 reviews. Never round it to 5.**
3. **Never put a person on this site who is not real.** No stock models
   presented as clients, no AI-generated people, no invented testimonials.
4. **Never remove the enquiry form's endpoint** without testing that enquiries
   still arrive. A form that looks like it works but sends nothing loses jobs
   silently.
5. **Never show a house Sabre didn't design or build.** A generated "after" of
   someone else's design is a copyright problem; a generated home shown as a
   finished build is the same as rule 3 with bricks instead of faces.
6. **Never add `noindex`** to a page unless you intend to remove it from Google.

## Two things that will catch you out

**Headings have no size on their own.** `<h1>` alone renders tiny. You must add
the class: `<h1 class="h1">`. Same for `h2` and `h3`.

**Never start a link or image path with a slash.** Write `../css/site.css`, not
`/css/site.css`. A leading slash works in some places and breaks in others, and
the breakage is invisible until the page is live.

## If you change the styling

Bump the number on the end of the stylesheet link in **every page**:

```html
<link rel="stylesheet" href="../css/site.css?v=2">
```

Without it, people who have visited before keep seeing the old design.
