# Design system

> Everything visual. If you are choosing a colour, a font or a size, it comes
> from here — not from taste on the day.

## Colours

Both reds and the near-black were **sampled from Sabre's own logo.** Nothing was
invented. That is why they should not be changed casually.

| Name in the code | Value | Used for |
|---|---|---|
| `--red` | `#FF1A1A` | The loud colour. Buttons, accents, bands |
| `--red-d` | `#D10E0E` | Hover states, links, error text |
| `--ink` | `#0B0B0C` | Headings and dark sections |
| `--ink2` | `#4C4C52` | Body text |
| `--muted` | `#86868E` | Small labels and captions |
| `--paper` | `#F6F4F1` | Page background. Warm off-white, not pure white |
| `--white` | `#FFFFFF` | Cards and panels |
| `--line` | `#E3DFD9` | Thin dividing lines |

They are all defined once, at the top of `css/site.css` in the `:root` block.
Change them there and they change everywhere. Never paste a raw colour code into
a page.

## Type

| Font | Used for |
|---|---|
| **Bebas Neue** | All headings, buttons and numbers. Always uppercase, tight |
| **Plus Jakarta Sans** | Body text |
| **DM Mono** | Small labels, eyebrows, metadata |

⚠️ **Headings have no size of their own.** An `<h1>` on its own renders at the
browser's default size, which looks broken. You must add the class:

    <h1 class="h1">Builders on the Bayside</h1>

Same for `h2` and `h3`. Use `.lede` for the introductory paragraph under a
heading, and `.eyebrow` for the small label above one.

## The look

Loud and blocky. Big uppercase headings, generous space, one strong red against
warm off-white and near-black. It is a builder, not a boutique — confident and
plain, not delicate.

**What it is not:** it does not use the light editorial style of Bare Bayside
Labs' own site. Those are different brands and should not converge.

## Photos

Real photos of real Sabre builds and real Sabre people. Nothing else.

- Wide shots of finished homes carry the site. Use them big
- Never a stock photo of people. See rule 3 in `rules.md`
- Always write alt text describing what is actually in the shot

## Mobile

Most visitors are on a phone. Check every change on a phone before calling it
done.

The phone number in the header is a tap-to-call link and must stay one:

    <a href="tel:+61738233200">07 3823 3200</a>

Display the friendly local number, dial the full international one. It is more
reliable across handsets.
