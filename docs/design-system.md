# Design system

> Everything visual. If you are choosing a colour, a font or a size, it comes
> from here, not from taste on the day.
>
> **Rewritten 2026-09-08 (v7).** The look is chosen for the person reading it, not
> for the fence banner. Edward's call after three earlier versions: "the styling
> has to appeal to the avatar."

## Who it is for

A couple in Wynnum or Manly with kids, a mortgage, and a 1950s to 80s house on a
good block near the water and a school. They are about to make the biggest
financial decision of their lives about their own home, and they read this site on
a phone at night after the kids are down. Their fears, in order: will we be
homeless for two years, will the number move, will the builder disappear, are we
even allowed. The site's job is to feel calm, established and looked after.
A builder since 1990 who does not need to shout.

## Colours

| Name in the code | Value | Used for |
|---|---|---|
| `--paper` | `#F8F7F4` | The ground on every page. Warm white, never blue-white |
| `--ink` | `#22232A` | Headings |
| `--ink2` | `#4A4B52` | Body text |
| `--muted` | `#8A8B93` | Small labels and captions |
| `--line` | `#E6E4DF` | Hairlines between sections and under the proof strip |
| `--char` | `#22232A` | Charcoal. The one dark band on each page: the closing block check |
| `--red` | `#EB2227` | Sabre's red, from their signage. **The button and the review stars. Nothing else** |

Defined once at the top of `css/site.css` in the `:root` block. Never paste a raw
colour code into a page.

**What is deliberately gone:** black slabs, red bands, red rules. The banner's
black and red are right on a fence read from a car. On a screen at night they read
as a tradie brand or a volume builder, the category Sabre has to sit above.

## Type

**Figtree** from Google Fonts, weights 400, 500 and 600. Headings are medium
weight (500), sentence case, modest size: the biggest heading on the site is 52px
on a desktop. Body is 17px with generous line spacing. Small labels are the only
uppercase element. Nothing is bold-shouting.

The "Sabre" wordmark only ever appears as the logo file. Never type it.

⚠️ **Headings have no size of their own.** Add the class:

    <h1 class="h1">Builders on the Bayside</h1>

Same for `h2` and `h3`. `.lede` is the paragraph under a heading, `.eyebrow` the
small label above one.

## The rhythm

Every section sits on the warm paper, separated by a hairline. One heading per
screen, plenty of space, photographs large with softly rounded corners. Photo one
side and words the other (`.alt`, `.alt.flip`). The proof numbers are a quiet strip
between hairlines (`.creds`), not a dark band.

Each page ends on the free block check in the single charcoal band, then the
footer. (The class is still `.band-red` for history. It is not red.)

## The home page order

Hero video → what clients say (rating, three quotes, the proof strip) → the loop
families are stuck in → the four fears answered in their words → four steps →
real houses on real streets → the family → a few more questions → the block
check. Reassurance before ambition. The reviews sit directly under the hero
because that is what the avatar looks for first.

## The hero

A drone-style pull-back over Sabre's own photo of the finished Clarence build,
ten seconds, silent, looping: `assets/video/drone-clarence-wide.mp4` on desktop,
`drone-clarence-portrait.mp4` on phones. It climbs above the house and fades to
black; over the black the page fades in the words "Build your new family home.
On the street you already love." (`.hero-words`, driven by a few lines of script
that watch the video's time). The invitation and the button sit low and quiet
over the video and fade out as the words fade in.

The house is real; the camera move and the surrounding streets are generated, so
the hero carries the caption "Clarence, built by Sabre. Visualised camera move."
(reworded 2026-09-17 at Edward's request; the disclosure stays until real footage lands). **It is a stand-in for real drone footage** that the professional
filmer will shoot. Swap the two files and posters, delete the caption, and nothing
else changes. The generator and encode lines are in the workshop repo
(`tools/gen_drone_hero.py`, `docs/reference/media-pipeline.md`).

The header is warm paper with dark text on inner pages and transparent with the
white logo over the video on the home page. Both logo files sit in the header;
CSS shows one.

## Photos

Real photos of real Sabre builds and real Sabre people. Nothing else.

- The seven gallery photos are Sabre's own, sharpened from their old 376px
  thumbnails with a non-generative upscaler
- The six team photos are Sabre's own from the old site, 200px. Worth sharpening
  the same way before launch
- The suburb pages need real street photos of Wynnum and Manly. Half a day with a
  phone, ideally late afternoon light
- Never a stock photo of people. See rule 3 in `rules.md`
- Always write alt text describing what is actually in the shot

## Mobile

Most visitors are on a phone. Check every change on a phone before calling it
done. The header collapses to logo, phone number and a wrapped nav.

The phone number in the header is a tap-to-call link and must stay one:

    <a href="tel:+61422831306">0422 831 306</a>

Display the friendly local number, dial the full international one.
