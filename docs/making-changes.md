# Making changes

> For Nathan, and for whatever AI assistant is helping him.

## Before you change anything

1. Read `rules.md`. It is short.
2. If you are about to state a fact about Sabre, check `client-facts.md` first.
3. If you are changing how something looks, check `design-system.md`.

## The most common jobs

### Change wording on a page

Open that page's `index.html` and edit the text between the tags. Text lives
between `>` and `<`. Leave the tags themselves alone.

### Add a new photo

1. Put the image in `assets/img/`
2. Give it a lowercase name with hyphens: `killarney-79-front.jpg`
3. Reference it with a relative path — from a subpage that is
   `../assets/img/killarney-79-front.jpg`
4. **Always add alt text** describing what is in the photo. It is what a blind
   visitor hears, and Google reads it too

### Add a whole new page

1. Make a folder named for the address you want: `/warranty/` means a folder
   called `warranty`
2. Put an `index.html` inside it
3. Copy an existing page as your starting point, so the header and footer match
4. Add it to the navigation in **every** page's header
5. Add it to `sitemap.xml`

### Change a colour or font

Open `css/site.css`. The colours are at the very top in the `:root` block, each
with a name like `--red`. Change it there once and it changes everywhere.

**Do not** paste colour codes into individual pages.

## After any change — check these

- [ ] Look at it on a phone, not just a computer. Most visitors are on a phone
- [ ] Click every link you touched
- [ ] If you edited the styling, bump the `?v=` number on the stylesheet link in
      every page
- [ ] If you touched the contact form, **send a real test enquiry and confirm it
      arrives**

## Things that look harmless and are not

| Looks fine | What actually happens |
|---|---|
| Deleting a page you don't want any more | Google drops that address and its ranking |
| Rounding 4.5 up to 5 | Misleading conduct. Real legal exposure |
| A nice stock photo of a happy family | Reads as a real client. See rule 3 |
| Starting a path with `/` | Breaks silently once live |
| Changing the CSS without bumping `?v=` | Returning visitors keep seeing the old design |
| Leaving `noindex` on a page | That page vanishes from Google |

## When to ask a human

- Anything involving the domain, DNS or email settings
- Any new claim about how Sabre operates — pricing, guarantees, timeframes
- Any photo of a person
- Anything you are not sure about

None of these are urgent enough to guess at.
