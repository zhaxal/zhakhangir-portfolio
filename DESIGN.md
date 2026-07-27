---
name: Zhakhangir Anuarbek Portfolio
description: A near-black engineering spec sheet set in extended uppercase type, ruled by hairlines, with one red.
colors:
  livery-red: "#e00013"
  livery-red-deep: "#c4000f"
  livery-red-mid: "#8c0010"
  livery-red-black: "#2a0208"
  ink-page: "#0a0a0a"
  ink-well: "#141414"
  paper-white: "#ffffff"
  graphite: "#414141"
  text-secondary: "rgba(255, 255, 255, 0.72)"
  text-muted: "rgba(255, 255, 255, 0.58)"
  text-faint: "rgba(255, 255, 255, 0.46)"
  border-hairline: "rgba(255, 255, 255, 0.14)"
  hover-veil: "rgba(255, 255, 255, 0.06)"
  surface-overlay: "rgba(10, 10, 10, 0.72)"
typography:
  display:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(30px, 6.6vw, 116px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontStretch: "118%"
  headline:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(34px, 5.4vw, 72px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontStretch: "118%"
  title:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(24px, 3vw, 38px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "normal"
    fontStretch: "118%"
  accordion-label:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(26px, 3vw, 38px)"
    fontWeight: 800
    lineHeight: 1
    fontStretch: "118%"
  plate-title:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(22px, 2.6vw, 34px)"
    fontWeight: 800
    lineHeight: 1.05
    fontStretch: "118%"
  company:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(20px, 2.2vw, 28px)"
    fontWeight: 800
    lineHeight: 1
    fontStretch: "118%"
  cell-heading:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.1
    fontStretch: "118%"
  award-title:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.1
    fontStretch: "104%"
  footer-link:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
    fontStretch: "104%"
  mailto:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(22px, 3.4vw, 52px)"
    fontWeight: 800
    lineHeight: 1.1
    fontStretch: "118%"
  wordmark:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(12px, 3.7vw, 18px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontStretch: "118%"
  menu-link:
    fontFamily: "Archivo, Noto Sans JP, Arial Black, sans-serif"
    fontSize: "clamp(34px, 11vw, 60px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontStretch: "118%"
  body:
    fontFamily: "Archivo, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.12em"
  caption:
    fontFamily: "Archivo, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.04em"
  micro:
    fontFamily: "Archivo, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.04em"
  field:
    fontFamily: "Archivo, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  mono:
    fontFamily: "Space Grotesk, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  row: "28px"
  gutter-sm: "20px"
  gutter: "64px"
  section-sm: "64px"
  section: "96px"
  max-content: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-page}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "#e5e5e5"
  button-brand:
    backgroundColor: "{colors.livery-red}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "48px"
  button-brand-hover:
    backgroundColor: "{colors.livery-red-deep}"
  lang-pill:
    backgroundColor: "transparent"
    textColor: "rgba(255, 255, 255, 0.62)"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  lang-pill-active:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-page}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "28px"
  tag-hover:
    backgroundColor: "{colors.hover-veil}"
    textColor: "{colors.paper-white}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "12px 0"
  plate-chip:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-page}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  publication-row:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "24px 20px"
  publication-row-hover:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-page}"
---

# Design System: Zhakhangir Anuarbek Portfolio

## Overview

**Creative North Star: "The Spec Sheet"**

An engineering specification, printed large. Everything in this system behaves like a technical document that someone decided to set at poster scale: values are ruled into cells by hairlines, periods and URLs are set in a numeral face so they read as data, labels are small and letterspaced like field names, and the page itself is near-black paper. Nothing is styled for pleasantness. Things are the size they are because that is how important they are.

The temperament is **industrial, decisive, unsentimental**. The display face is set extended and heavy and always uppercase — it does not modulate, it does not get friendly at small sizes, it just gets smaller. There is exactly one chromatic colour in the entire system and it is used sparingly enough that a single 36px strip of it across the bottom of the page reads as an event. Depth does not exist: there is not one shadow in the codebase, and separation is carried entirely by a 14%-white hairline that never changes weight or colour. Corners are square. The only curve permitted anywhere is the full 999px pill on controls, and the contrast between that curve and the universal zero is the system's one piece of wit.

Motion is heavy but never decorative. Content arrives from off-axis under a single expo easing, thumbnails resolve from grayscale to colour under the pointer, a publication row inverts to solid white the instant you touch it. Every one of those is a state change reporting itself, not an ornament. The system is bilingual by commitment — Noto Sans JP is appended to both type stacks, so Japanese must be composed for, never bolted on.

**Key Characteristics:**
- One chromatic colour, rationed hard
- A single hairline is the only line in the system
- Extended, heavy, uppercase display type at every scale
- Zero radius everywhere; 999px on controls; nothing in between
- No shadows at all — depth is line and veil
- Motion reports state; it never garnishes

## Colors

A near-black field, five weights of white, and one red that is the only chromatic colour in the entire system.

### Primary
- **Livery Red** (#e00013): The system's one voice. It carries the scroll-progress bar, the `+` bullets in the capability chips, the focus ring, the `©` glyph, the cursor core, and the send button. It is never a background for text longer than a button label and never a decorative wash.
- **Livery Red Deep** (#c4000f): Reserved for two jobs — the full-bleed 36px strip that closes the page, and the pressed state of the brand button. Also the text-selection background.
- **Livery Red Mid** (#8c0010) and **Livery Red Black** (#2a0208): Exist only as the middle and dark stops of the hero gradient. They are never applied as flat fills.

### Neutral
- **Ink Page** (#0a0a0a): The page. Also the text colour on any white surface — an inverted publication row, an active language pill, a plate chip.
- **Ink Well** (#141414): The empty state behind a thumbnail before its image paints. The only other surface colour in the system.
- **Paper White** (#ffffff): Display type, chips, active pills, and the fill an inverting row flips to.
- **Text Secondary** (rgba(255,255,255,.72) — 10.20:1): Body copy. The default reading colour.
- **Text Muted** (rgba(255,255,255,.58) — 6.86:1): Captions, section labels, job roles, input labels.
- **Text Faint** (rgba(255,255,255,.46) — 4.68:1): Years, periods, small print. The quietest tier that is still legible — and it has to be legible, because the audience reads this on a phone in daylight.
- **Graphite** (#414141): Appears in exactly one place — the description line inside a publication row after it has inverted to white.
- **Hairline** (rgba(255,255,255,.14)): Every border in the system.
- **Hover Veil** (rgba(255,255,255,.06)): The only hover fill.
- **Surface Overlay** (rgba(10,10,10,.72)): The scrolled header, over a 14px backdrop blur.

### Named Rules

**The One Voice Rule.** Livery Red is the only chromatic colour that exists. It appears on well under 5% of any viewport, and its rarity is the entire point. A second accent hue does not get introduced; if something needs to be distinguished, distinguish it with weight, scale, or a hairline.

**The Hairline Rule.** `1px solid rgba(255,255,255,.14)` is the only line in the system. Not a heavier variant for emphasis, not a darker one for subtlety, not a dashed one for provisional state. One line, everywhere, forever.

**The Four Whites Rule.** Body text has exactly four weights — 100%, 72%, 58%, 46% — plus the 14% that is a line rather than text. Reach for one of the four; do not invent a fifth opacity to solve a hierarchy problem. Every one of them clears 4.5:1 on the page, and that is the constraint that sets the floor: the quiet end stops where legibility does.

**The Hero Exception.** The hero and header carry six opacities of their own (.62 on an inactive language pill, .65 on the cursor ring, .70 on nav links, .82/.86/.90 across the hero meta block). These are pinned by the handoff and sit over the red gradient rather than the page, where the four-tier scale does not apply. They are the *only* sanctioned departure — do not extend the habit to anything on the near-black field.

## Typography

**Display Font:** Archivo (variable width and weight), with Noto Sans JP and Arial Black as fallbacks
**Body Font:** Archivo, with Noto Sans JP, Helvetica Neue and Arial as fallbacks
**Label/Mono Font:** Space Grotesk, with `ui-monospace` fallback

**Character:** One family doing two jobs at opposite extremes. Set at `font-stretch: 118%` and weight 800 in uppercase, Archivo is a wide industrial slab of a headline face; set at normal width and 400 it is a plain, unremarkable UI face that gets out of the way. The pairing is not two fonts — it is one font at two temperaments, which is why the page reads as a single document rather than a composition.

### Hierarchy
- **Display** (800, `clamp(30px, 6.6vw, 116px)`, 0.9, -0.02em, stretch 118%): The name in the hero, and nothing else. Set `white-space: nowrap` and allowed to be enormous.
- **Headline** (800, `clamp(34px, 5.4vw, 72px)`, 1, -0.01em, stretch 118%): Section titles — PROJECTS, SKILLS & TOOLS, WHERE I'VE WORKED, PAPERS & PRESENTATIONS, GET IN TOUCH. Always split across lines so each line can reveal independently.
- **Title** (800, `clamp(24px, 3vw, 38px)`, 1, stretch 118%): Block headings and accordion labels. Plate titles sit slightly under this at `clamp(22px, 2.6vw, 34px)` / 1.05; company names at `clamp(20px, 2.2vw, 28px)`; education cells at a flat 22px.
- **Body** (400, 14px, 1.55): Intro and plate descriptions. Small body drops to 13px / 1.5–1.6 for accordion copy and experience detail. Measure is capped tight — 46ch for accordion copy, 52ch for plate copy, 62ch for experience copy.
- **Label** (400, 12px, 0.08–0.14em, uppercase): Section eyebrows, nav, roles, input labels, the footer legal line. Captions drop to 11px / 0.04em.
- **Mono** (Space Grotesk, 13px): Used in exactly two places — the period column in the experience table, and the site URL in the footer. Its job is to say "this is data."

**One documented exception to the ramp:** the red `+` that prefixes each capability chip is set at 15px. That is a glyph being optically matched to 12px text beside it, not a type role — do not promote it to one, and do not copy it as a text size.

### Named Rules

**The Extended Rule.** Display type is *always* `font-weight: 800`, `font-stretch: 118%`, and uppercase. There is no light display setting, no sentence-case headline, no condensed variant. Archivo at normal width is UI type and is never used for a heading.

**The Two Faces Rule.** Space Grotesk appears only where a value must read as measured data. It is not a body face, not a label face, and not a stylistic accent. If a number is prose, it is set in Archivo.

**The Uppercase Is Structural Rule.** Case is applied in CSS, never in the content layer. Copy in `data/content.ts` is written in sentence case and uppercased by `text-transform`, so a locale that has no case (Japanese) is unaffected.

## Layout

A single 1240px content column inside 64px page gutters, rebuilt on a 4px base. Standard sections are `96px` vertical padding with the content block centred at `max-width: 1240px`; consecutive sections are separated by a hairline `border-top` rather than by extra space. The spacing steps actually in use are 4, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 44, 48, 56, 64, 72, 96 and 120 — dense at the small end for control internals, sparse at the top for section rhythm.

Two structures deliberately break the column. **Project plates** are 78% wide and alternate their auto margin, so each one bleeds to one page edge and the pair reads as a zigzag. The **footer's red strip** uses a negative margin equal to the current gutter to bleed the full viewport width.

Three breakpoints, all real:

- **≤900px** — the desktop nav is replaced by a hamburger and full-screen panel; gutters collapse 64px → 20px; section padding 96px → 64px; the Moscow Sport grid goes 5 columns → 2; plates go 78% → 100% and stop alternating; the experience row drops its 160px period column so the period sits above the company; the education grid and contact grid go single-column.
- **≤560px** — the Moscow Sport grid and footer columns go single-column; plate chips and year markers pull in to 14px insets; the header cluster tightens (padding 14px, 6px gaps, 10px pills) and the wordmark scales on `clamp(12px, 3.7vw, 18px)`.
- **≤374px** — the header CTA is withdrawn. Below this width the wordmark, both language pills and the CTA cannot share a row without truncating the name, and the name wins. Contact remains one tap away in the hamburger panel.

### Named Rules

**The 96/64/1240 Rule.** Vertical rhythm is 96px, page gutters are 64px, content is 1240px. A new section that wants different numbers is wrong about being a section.

**The Hairline Seam Rule.** Sections are separated by a hairline, not by a gap. Two sections never sit adjacent with only whitespace between them.

## Elevation & Depth

**There is not a single `box-shadow` in this codebase, and that is a commitment rather than an omission.** The system is aggressively flat. Depth is communicated three ways and only three ways: a hairline that separates one plane from another; a 6%-white veil that indicates a surface is being hovered; and a `backdrop-filter: blur(14px)` behind a 72%-opaque near-black header, which is the only place in the system where one plane is allowed to sit visibly above another.

Photography carries its own depth — the hero sits under a `mix-blend-mode: luminosity` at 42% opacity over the gradient — but that is atmosphere, not elevation.

### Named Rules

**The No-Shadow Rule.** No `box-shadow`, no `drop-shadow`, no glow, no inner highlight. If an element needs to feel separate, give it a hairline. If it needs to feel active, give it the veil. There is no third option.

## Shapes

Square. `border-radius: 0` is the default for every surface, image, chip, tag, cell, input, and thumbnail in the system. Photographs are cropped to hard ratios — 4:3 for grid thumbnails, 16:8 for project plates — and clipped by `overflow: hidden` with no rounding.

The single exception is controls, which are fully round at `999px`: buttons, the language pills. There is no intermediate radius. A 4px or 8px corner does not exist in this system and introducing one would read as a mistake.

The recurring silhouette is the **cell** — a rectangle bounded on some or all sides by hairlines, holding a label, a value, and nothing else. The education grid is the purest example: a two-column table built entirely from `border-top` + `border-left` on the container and `border-right` + `border-bottom` on each cell, so interior lines never double.

### Named Rules

**The Zero-or-Pill Rule.** Radius is `0` or it is `999px`. Nothing between those two values may be introduced.

## Components

Controls are **machined — blunt and exact**. They read as milled parts: square by default, hairline-bounded, sized to their job and no larger, with the pill reserved as the one deliberate exception. Nothing is soft, nothing is decorated, and no control announces itself before it is needed.

### Buttons
- **Shape:** Fully round (`999px`). The only rounded objects in the system.
- **Primary:** Paper White fill, Ink Page text, 32px tall at `sm` / 48px at `lg`. Carries a 5px leading dot in `currentColor` — the signature that marks a pill as a real action rather than a link.
- **Brand:** Livery Red fill, Paper White text, same geometry, used once per page on the contact submit.
- **Hover / Press:** Primary shifts to `#e5e5e5`, brand to Livery Red Deep, both over 220ms on the standard easing. Press is a `scale(.98)`. There is no shadow lift and no translate.
- **Label:** 12px (14px at `lg`), 500 weight, uppercase, 0.02em.

### Tags
- **Style:** Transparent fill, hairline border, zero radius, 28px tall, Text Muted, 12px uppercase at 0.06em tracking.
- **State:** Hover lifts the text to Paper White over the hover veil. Tags are non-interactive by design — they label a stack, they are not filters.

### Section labels

The eyebrow above each section title, 12px uppercase at 0.08em in Text Muted, led by a marker glyph. The marker is **pinned by the handoff and is not semantically load-bearing** — record it rather than derive it: `°` on Selected Work, Experience and Publications; `•` on Capabilities and Contact. A new section should copy whichever of the two its neighbours use rather than invent a rule.

### Cells & Containers
- **Corner Style:** Zero, always.
- **Background:** Transparent. Containers are never given a fill; they are described by their hairlines.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** Hairline, applied asymmetrically so adjacent cells share a single line rather than stacking two.
- **Internal Padding:** 28px vertical / 24px horizontal for grid cells; 28px vertical for table rows.

### Inputs
- **Style:** Fully transparent with a single hairline `border-bottom`. No box, no fill, no radius. 14px text, 12px/0.1em uppercase label in Text Muted above it.
- **Focus:** The bottom border goes Paper White; `:focus-visible` adds a `2px` Livery Red outline at `2px` offset.
- **Error:** The bottom border goes Livery Red and a 12px message appears beneath, led by a 5px Livery Red dot. **The message text itself is Paper White, not red** — red measures 3.94:1, which is sound for a marker (3:1) but fails for words (4.5:1), and an error the reader can't read is not an error message. The dot carries the signal; the type carries the sentence. Same leading-dot idiom as the pill buttons.
- **Status line:** Identical treatment. The pending state drops the red entirely — waiting is not an alert — and sets both dot and text in Text Secondary.

### Navigation
- **Style:** Fixed, transparent, 14px/64px padding, sitting over the hero with no border. A 2px Livery Red progress bar tracks scroll along its top edge.
- **Scrolled state:** Past `0.82 × innerHeight` it fades to Surface Overlay with a 14px backdrop blur and its bottom hairline appears, over 220ms.
- **Links:** 12px uppercase at 0.1em, 70% white, resolving to full white on hover.
- **Mobile:** Below 900px the links are replaced by a 26×16px three-rule hamburger whose bars rotate into an ✕. The panel is a solid Ink Page field with links at `clamp(34px, 11vw, 60px)`, each on its own hairline, and closes on tap, second press, or Escape.

### Imagery
- **Grid thumbnails** (4:3): rendered `grayscale(1) contrast(1.05)` and resolving to full colour with a `scale(1.04)` on hover, over 320ms/520ms.
- **Feature plates** (16:8): full colour at rest. These are the device photographs, and the hardware is the subject. Both sources are **portrait**, so a 16:8 box crops most of them away; each plate therefore carries a focal point (`ProjectPlate.focus` → `object-position`) naming the band worth showing. Ship the photo whole and let the box crop it — never pre-crop the file, or the framing stops being adjustable.
- **The hero**: permanently `grayscale(1) contrast(1.15)` at 42% opacity under `mix-blend-mode: luminosity`, with an 18s Ken Burns push from `scale(1)` to `scale(1.09)`.

### Named Rules

**The Subject-In-Frame Rule.** A plate exists to show the hardware. When a portrait photo meets a 16:8 band, the centred default almost never lands on the device — set the focal point so the subject is legible, and check it rather than trusting `cover`.

**The Earned Colour Rule.** Desaturation is a unifying device, not a house style. The nine event-site screenshots are grayscaled because they are nine clashing brands that must read as one texture, and their colour returns under the pointer. Feature photography stays in colour. Do not desaturate an image whose subject is the point.

**The No-Pointer Clause.** Under `@media (hover: none)` the thumbnails render in colour at rest. Without a pointer there is no way to earn the colour back, and the primary audience reads this on a phone — the greyscale device would degrade to nine grey rectangles for exactly the people it matters most to. Any hover-gated reveal must answer "what does a thumb see?" before it ships.

**The Hit-Area Rule.** Control sizes here are deliberate, so a coarse pointer gets a larger *hit area*, never a larger control: `[data-tap]` draws an invisible centred pad of `max(100%, 44px)` that takes no space in layout, under `@media (pointer: coarse)`. Controls sitting shoulder-to-shoulder use `data-tap="v"` and grow vertically only — a horizontal pad on adjacent controls makes their hit zones overlap and steal each other's taps. The hamburger instead grows down and to the right into the header's own gutter, via padding cancelled by negative margins.

**The Red Is A Mark, Not A Word Rule.** Livery Red measures 3.94:1: it clears the 3:1 bar for marks and rules and fails the 4.5:1 bar for text. So red appears as the dot before an error, the rule under a hovered link, the `+` before a chip, the progress bar, the focus ring — never as the letters themselves. Hovered links keep white text and take a 1px red underline at 3px offset.

**The Off-Axis Rule.** Content enters from off-axis and resolves — rise from 26px below, or slide 40px from the left or right, over 620ms opacity / 720ms transform on `cubic-bezier(.16,1,.3,1)`, staggered 100–140ms between siblings, fired once by an IntersectionObserver at `threshold: 0.1` and never replayed. Section titles split: line one from the left, line two from the right at +120ms.

**The Contained Motion Rule.** Because reveals start translated ±40px off their final position, any container holding them must clip horizontally (`overflow-x: clip` on `main`). A reveal that widens the document is a bug, not a flourish.

**The Reduced-Motion Rule.** Under `prefers-reduced-motion: reduce` every animation is cancelled, all transitions collapse to 1ms, reveals resolve instantly at full opacity, and the custom cursor is not mounted at all. This is not a degraded experience; it is a supported one.

### Signature Component: The Inverting Row

The publication list is the system's sharpest gesture. Each row is transparent with a hairline beneath, holding a 20px uppercase title, a 13px muted description, and an italic `//YEAR` pushed right. On hover the entire row flips to solid Paper White with Ink Page text over 120ms — the fastest transition in the system — and its description drops to Graphite. It bleeds 20px past its container on both sides via negative margin so the white lands edge-to-edge rather than floating.

It is the one moment where the near-black page is fully overturned, and it works because nothing else in the system does it.

**The inversion is reserved for rows that lead somewhere.** A row only renders as a link — and only then inverts — when it carries an `href`. An unlinked row keeps its resting state. The strongest visual promise in the system must not be attached to an element that goes nowhere, least of all on the page's least verifiable claims; the gesture is a signal, not decoration.

## Do's and Don'ts

### Do:
- **Do** separate everything with the hairline (`rgba(255,255,255,.14)`) and let it carry all structure.
- **Do** set every heading extended, heavy and uppercase (`font-stretch: 118%`, `font-weight: 800`).
- **Do** keep radius at `0`, except controls at `999px`.
- **Do** ration Livery Red. Under 5% of any viewport, and never as a text background beyond a button label.
- **Do** use Livery Red as a marker rather than as body or message text — at 3.94:1 it clears the 3:1 non-text bar but not the 4.5:1 text bar.
- **Do** keep every text tier above 4.5:1 on the page. If a hierarchy needs more steps than the scale has, use size or weight, not a dimmer grey.
- **Do** write copy in sentence case in `data/content.ts` and uppercase it in CSS, so Japanese is unaffected.
- **Do** give every new string both an `en` and a `ja` value. A one-locale string is unfinished.
- **Do** clip horizontally around anything that reveals from off-axis.
- **Do** honour `prefers-reduced-motion` in the same commit that adds motion, not in a later pass.

### Don't:
- **Don't** add a `box-shadow`, glow, or glassmorphic panel. The system has zero shadows and that is load-bearing.
- **Don't** introduce a second accent hue, a gradient on text, or a colour-shifting border. One red, flat.
- **Don't** use an intermediate corner radius. 4px, 8px and 12px do not exist here.
- **Don't** reach for Inter, Roboto, or a terminal-green monospace theme. This is not a dark-mode developer-portfolio page — no typing animations, no `</>` motifs, no contribution graphs.
- **Don't** centre everything on a soft grey card with a drop shadow. Corporate template minimalism is an explicit anti-reference.
- **Don't** animate for its own sake. No parallax garnish, no bouncing easing, no motion that isn't a state reporting itself.
- **Don't** invent a fifth text opacity to solve a hierarchy problem. Use the four, or use scale.
- **Don't** set error or status copy in red. The dot is red; the words are white.
- **Don't** desaturate feature photography. Grayscale unifies the screenshot grid; it is not the house style.
