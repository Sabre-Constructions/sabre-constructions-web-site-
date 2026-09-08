# Design system

> Everything visual. If you are choosing a colour, a font or a size, it comes
> from here, not from taste on the day.
>
> **Rewritten 2026-09-08.** The look is now Sabre's own signage, chosen from three
> options built against two reference sites (hedgerconstructions.com.au for the
> flyover hero and the calm band rhythm; yamavans.com for the zoomed-out scale).
> Edward chose option A. Nathan is yet to see it.

## Where it comes from

Every token below was read off the fence mesh banner Sabre had printed in August
2026 (Wild Web Print & Sign, job 8574). Nothing was invented, and nothing was
borrowed from another builder. If a colour or a face is not on that banner, it is
not on this site.

## Colours

| Name in the code | Value | Used for |
|---|---|---|
| `--black` | `#0A0A0A` | The ground. Header, footer, every dark band. The brand is black-first |
| `--red` | `#EB2227` | Buttons, the short rule above headings, stars, one word in a headline at most. Never a flooded band except the final call to action |
| `--white` | `#FFFFFF` | Light sections and text on black |
| `--ink2` | `#3A3A3E` | Body text on white |
| `--grey-d` | `#B9B9C0` | Body text on black |
| `--muted` | `#7C7C84` | Small labels |

They are all defined once at the top of `css/site.css` in the `:root` block.
Change them there and they change everywhere. Never paste a raw colour code into
a page.

**The old warm off-white (`#F6F4F1`) and the hot red (`#FF1A1A`) are gone.**
They were the demo's choices, not Sabre's.

## Type

**Arial Bold, and only Arial.** It is what is printed on Sabre's signage, it is on
every phone and computer already, and it loads nothing. Headings are sentence
case, tight (`letter-spacing: -.02em`), never uppercase. Small labels
(`.eyebrow`) are the one uppercase element, spaced wide.

The "Sabre" wordmark is an extended squared face and only ever appears as the
logo file (`assets/img/sabre-logo-white.png`). Never type it.

⚠️ **Headings have no size of their own.** You must add the class:

    <h1 class="h1">Builders on the Bayside</h1>

Same for `h2` and `h3`. Use `.lede` for the paragraph under a heading and
`.eyebrow` for the small label above one. The first eyebrow in a section gets
the short red rule automatically.

## The rhythm

Sections alternate: white, black, white, black. `<section>` is white;
`<section class="band-dark">` is black. Inside a band, a photo sits on one side
and the words on the other (`.alt`, and `.alt.flip` to swap sides). One heading
per screen. Generous padding. The houses are the argument, so photos go big.

Every page ends on the free block check in a red band (`.band-red`), then the
black footer.

## The hero

The home page opens on a full-bleed video with the headline low and quiet over a
dark gradient. The header floats over it (`.topbar.over`).

Right now the video is Nathan's own phone clip from a real Sabre site (August
2026, a Queenslander being raised): `assets/video/site-raise-wide.mp4` on
desktop and `site-raise-portrait.mp4` on phones. **It is a placeholder for the
drone flyover of a finished Sabre home** that the professional filmer will shoot.
Swap the two files and the two poster images; nothing else changes.

Inner pages open on a plain white heading block, not a hero.

## Photos

Real photos of real Sabre builds and real Sabre people. Nothing else.

- The seven gallery photos are Sabre's own, sharpened from their old 376px
  thumbnails with a non-generative upscaler
- The six team photos are Sabre's own from the old site, 200px. Worth sharpening
  the same way before launch
- Never a stock photo of people. See rule 3 in `rules.md`
- Always write alt text describing what is actually in the shot

## Mobile

Most visitors are on a phone. Check every change on a phone before calling it
done. The header collapses to logo, phone number and a wrapped nav.

The phone number in the header is a tap-to-call link and must stay one:

    <a href="tel:+61738233200">07 3823 3200</a>

Display the friendly local number, dial the full international one.
