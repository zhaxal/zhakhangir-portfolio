---
name: Zhakhangir Anuarbek Portfolio
description: A full-stack engineer's portfolio as a Japanese expressway seen from above, with the name painted on the asphalt, Work and Projects running side by side, and plain words throughout.
colors:
  asphalt: "#3a4046"
  asphalt-deep: "#2c3136"
  asphalt-tint: "#c5cbd2"
  asphalt-line: "#5a626b"
  steel: "#98a1ab"
  paint-white: "#ffffff"
  sign-green: "#007b43"
  sign-green-tint: "#e0f5e8"
  lane-blue: "#1670cf"
  lane-vermilion: "#d23f1c"
  gate-purple: "#8236aa"
  gate-purple-deep: "#6a2a8c"
  gate-purple-tint: "#efdff7"
  caution-yellow: "#ffd400"
  board-ink: "#14202e"
  board-ink-soft: "#44546a"
  board-rule: "#d3dae2"
  board-shade: "#eef2f6"
  placeholder: "#5c6b7e"
  stop-red: "#c8161d"
  led-black: "#0b0e12"
  led-rule: "#2c333c"
  led-amber: "#ffb400"
  led-amber-dim: "#b08318"
  led-green: "#7be04f"
typography:
  road-lettering:
    fontFamily: "Barlow Condensed, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, sans-serif"
    fontSize: "clamp(5rem, 10.2vw, 9.25rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
  road-lettering-narrow:
    fontFamily: "Barlow Condensed, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, sans-serif"
    fontSize: "clamp(3.9rem, 19.5vw, 9.25rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
  road-lettering-lane:
    fontFamily: "Barlow Condensed, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  menu-place:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 7vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  other-script:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  sign-row:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.05
  lead:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  value:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  small:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
  caption:
    fontFamily: "Barlow, Zen Kaku Gothic New, Hiragino Kaku Gothic ProN, Hiragino Sans, Yu Gothic, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
  plate-number:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
  dot-print:
    fontFamily: "DotGothic16, Barlow, Zen Kaku Gothic New, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  code: "2px"
  post: "3px"
  sign: "4px"
  plate-inner: "5px"
  panel: "6px"
  plate: "8px"
  board-inner: "9px"
  board: "14px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 5vw, 64px)"
  section: "clamp(56px, 8vw, 104px)"
  gap: "14px"
  max-content: "1280px"
  bar: "56px"
  median: "56px"
components:
  guide-sign:
    backgroundColor: "{colors.sign-green}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.board}"
    padding: "24px 28px"
  board:
    backgroundColor: "{colors.paint-white}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.board}"
    padding: "28px"
  auxiliary-plate:
    backgroundColor: "{colors.paint-white}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.panel}"
    padding: "6px 12px"
  pavement-work:
    backgroundColor: "{colors.lane-blue}"
    textColor: "{colors.paint-white}"
    padding: "22px 28px 26px"
  pavement-projects:
    backgroundColor: "{colors.lane-vermilion}"
    textColor: "{colors.paint-white}"
    padding: "22px 28px 26px"
  lane-sign:
    backgroundColor: "{colors.sign-green}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.plate}"
    height: "44px"
    padding: "6px 12px 6px 8px"
  lane-sign-hover:
    backgroundColor: "{colors.lane-blue}"
  contact-sign:
    backgroundColor: "{colors.gate-purple}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.board}"
    padding: "16px 24px"
  contact-sign-hover:
    backgroundColor: "{colors.gate-purple-deep}"
  contact-button:
    backgroundColor: "{colors.gate-purple}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.panel}"
    height: "36px"
    padding: "0 12px 0 14px"
  contact-button-hover:
    backgroundColor: "{colors.gate-purple-deep}"
  send-button:
    backgroundColor: "{colors.gate-purple}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.sign}"
    height: "56px"
    padding: "0 20px"
  send-button-hover:
    backgroundColor: "{colors.gate-purple-deep}"
  language-switch:
    backgroundColor: "{colors.asphalt-deep}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.sign}"
    height: "32px"
    padding: "0 9px"
  language-switch-active:
    backgroundColor: "{colors.paint-white}"
    textColor: "{colors.board-ink}"
  input:
    backgroundColor: "{colors.paint-white}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.sign}"
    padding: "12px 14px"
  exit-chip:
    backgroundColor: "{colors.paint-white}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.sign}"
    height: "44px"
    padding: "0 14px 0 6px"
  exit-chip-hover:
    backgroundColor: "{colors.board-ink}"
    textColor: "{colors.paint-white}"
  monogram:
    backgroundColor: "{colors.sign-green}"
    textColor: "{colors.paint-white}"
    height: "36px"
    width: "49px"
  year-plate:
    backgroundColor: "{colors.lane-blue}"
    textColor: "{colors.paint-white}"
    rounded: "{rounded.plate}"
    height: "48px"
    padding: "0 12px"
  information-board:
    backgroundColor: "{colors.led-black}"
    textColor: "{colors.led-amber}"
    rounded: "{rounded.plate}"
    padding: "12px 16px 14px"
---

# Design System: Zhakhangir Anuarbek Portfolio

## Overview

**Creative North Star: "The Road From Above"**

The page is a Japanese expressway seen from directly overhead, and scrolling is driving. The ground is asphalt from top to bottom, with solid white edge lines in the gutters and dashed lane lines down the middle. The name is painted on the road. A little way in, the road splits at a hatched gore into two lanes that run side by side, Work on the left and Projects on the right, so each role sits beside the work it produced. They merge again, pass the boards for education, papers and tools, and end at the contact section.

Three kinds of object sit on the road, and the difference between them is the system. **Paint** is for the biggest words: condensed lettering stretched along the direction of travel, the way it is painted for drivers. **Signs** name things: green, white lettering, a white border set inside the edge. **Boards** are white and are for reading. Nothing has a shadow or a gradient.

The theme is carried by the visuals only. The owner asked for the copy to be serious, so every word on the page says plainly what a thing is.

Earlier versions (a near-black "spec sheet", a railway layout, and expressway versions with a second "Vision" route and themed copy) are not references for new work.

**Key Characteristics:**
- Asphalt everywhere; the page is one road
- Work and Projects side by side, never one after the other on a wide screen
- Paint for the biggest words, signs for names, white boards for reading
- Blue is the Work lane, vermilion is the Projects lane, purple is contact
- Plain words: the road is drawn, never described
- Flat: no shadows, no gradients

## Colors

Asphalt and white paint, one sign green, two lane colours, purple for contact, and a small amber LED board.

### Primary
- **Sign Green** (#007b43): Every guide sign: the introduction sign, the sign naming each entry, the lane signs on the gantry, the section sign for education, papers and tools, the monogram, the arrow squares on profile links. White text sits on it at 5.4:1; secondary text is **Sign Green Tint** (#e0f5e8, 4.7:1).

### Secondary
- **Lane Blue** (#1670cf): The Work lane. Its pavement block and year plates; focus and field hover on white boards. White on it is 4.9:1.
- **Lane Vermilion** (#d23f1c): The Projects lane. Its pavement block and year plates. White on it is 4.7:1.

### Tertiary
- **Gate Purple** (#8236aa): Contact. The header's Contact control, the Contact sign at the top, the contact section's sign, the Send button. White on it is 6.9:1; hover is **Gate Purple Deep** (#6a2a8c); secondary text is **Gate Purple Tint** (#efdff7).

### Neutral
- **Asphalt** (#3a4046): The page. **Asphalt Deep** (#2c3136) is the header and footer; **Asphalt Tint** (#c5cbd2) is secondary text on either (6.5:1); **Asphalt Line** (#5a626b) is their hairline.
- **Paint White** (#ffffff): Road lettering, lane and edge lines, zebra hatching, sign lettering and borders, boards.
- **Steel** (#98a1ab): The gantry beam, the canopy band above contact, the LED board's frame.
- **Board Ink** (#14202e): All text on white boards, their 2px rules, frames around images. **Board Ink Soft** (#44546a) is secondary text (7.7:1), **Board Rule** (#d3dae2) the hairline, **Board Shade** (#eef2f6) a row's hover fill.
- **Caution Yellow** (#ffd400): The focus ring on anything that is not a white board, and text selection on the road. Never behind text.
- **Stop Red** (#c8161d): Form errors only.
- **LED Black, Amber, Amber Dim, Green, Rule** (#0b0e12, #ffb400, #b08318, #7be04f, #2c333c): The availability board and nothing else.

### Named Rules

**The Three Objects Rule.** Paint, sign, board. The biggest words are painted on the asphalt; a name goes on a green sign; anything to be read goes on a white board. Body text never sits directly on asphalt or on a sign beyond a sentence.

**The Lane Colour Rule.** Blue means Work and vermilion means Projects, wherever they appear: pavement, year plate, swatch. They are never used for anything else, and never as a board or sign background.

**The Contact Rule.** Purple marks contact only.

## Typography

**Road Lettering:** Barlow Condensed 700, uppercase, stretched vertically (Japanese: Zen Kaku Gothic New 900)
**Sign and Board Font:** Barlow (400 to 800) with Zen Kaku Gothic New (500, 700, 900) for Japanese
**Dot Print:** DotGothic16, for the LED availability board

**Character:** Road lettering is tall and narrow because it is painted to be read from a moving car; here it is set in a condensed face and stretched 1.6 times along the direction of travel (1.45 times for Japanese). Everything on a sign or a board is the plain road-sign grotesk in sentence case.

### Hierarchy
- **Road lettering, name** (700, `clamp(5rem, 10.2vw, 9.25rem)` from 960px, `clamp(3.9rem, 19.5vw, 9.25rem)` below; Japanese about 0.73 of that): The name, one painted line per name part. The only type this large.
- **Road lettering, lane** (700, `clamp(4.5rem, 8vw, 7rem)`): The lane name painted on its pavement block (WORK, PROJECTS).
- **Headline** (800, `clamp(2rem, 4.2vw, 3.25rem)`, 1.05): Section signs: Education, papers and tools; Contact.
- **Title** (800, `clamp(1.4rem, 2.2vw, 1.75rem)`): Entry names, board headings.
- **Sign row** (800, 1.375rem): Lane rows on the introduction sign, the two headings in the contact section.
- **Lead** (600, `clamp(1.125rem, 1.4vw, 1.25rem)`, 1.45): The first paragraph on a board, the sentence on a pavement block, the introduction sign.
- **Body** (400, 1.0625rem, 1.55): Bullets. Japanese sets at 1rem / 1.8.
- **Value** (700, 1.125rem, tabular numerals): The right-hand column of a figures table.
- **Small** (500 or 600, 0.9375rem): Meta lines, figure labels, captions, header places. Site years use 0.8125rem.
- **Label** (700, 0.875rem): The language switch.
- **Dot print** (DotGothic16, 1rem, 1.5): The LED availability board.

### Named Rules

**The Plain Words Rule.** Copy is plain and professional. Sections are called what they are (Work, Projects, Education, Contact). No road puns, slogans, themed labels or jokes: the road is drawn, never described.

**The Paint Rule.** Road lettering is uppercase, condensed and stretched, set with the `.paint` class, one element per line. It is for the name and the two lane names and nothing else.

**The Both Scripts Rule.** A sign carries both scripts. The name's other script is on an auxiliary plate under the paint; lane names, section signs and the footer show the other language's name beside or beneath the current one, marked with its `lang`.

**The Dot Print Rule.** DotGothic16 appears only on the LED board, where a dot matrix is the material.

**The Sentence Case Rule.** Signs and boards are sentence case. No tracked uppercase labels and no label above a heading.

## Layout

One centred column, `min(100% - 2 × gutter, 1280px)`, on asphalt. The gutter is `clamp(16px, 5vw, 64px)` and carries a 3px solid white edge line on each side for the full length of the page.

The page is one road in four stretches:

1. **The approach.** From 960px, seven columns of painted name with two auxiliary plates under it, and five columns of roadside signs (the introduction sign, the availability board, the Contact sign). Below 960px these stack. A dashed centre line runs behind.
2. **The junction.** From 980px a three-column grid: lane, a 56px median, lane. A zebra-hatched gore opens the median and a mirrored one closes it. Each lane starts with a coloured pavement block carrying its painted name, the name in the other script and one sentence, and then holds its entries in one column: roles under Work; the event sites and then the thesis under Projects. Below 980px the lanes follow one another and the median is gone.
3. **Education, papers and tools.** A green sign, then education (five columns) and papers (seven) on two boards from 960px, and tools on a full-width board.
4. **Contact.** A purple sign, a full-width canopy band, then email and the message form side by side from 980px (five and six columns).

An entry is a green sign followed by one white board, 14px apart; entries on a lane are `clamp(36px, 5vw, 52px)` apart so the lane line shows between them.

## Elevation & Depth

There are no shadows. The view is from directly above, so nothing overlaps except what is stuck to the top: the header, and the lane gantry while it is over the two lanes. Separation comes from asphalt between objects, a sign's inset border, and 2px ink rules on boards.

### Named Rules

**The Flat Rule.** No `box-shadow`, no blur, no gradient used as colour. Gradients appear only as mechanics for flat paint and metal: dashed lane lines, zebra hatching, the canopy's ribs.

## Shapes

Paint has square edges: pavement blocks, lane lines and hatching are never rounded. Signs and boards have a 14px corner; a sign also has a 3px white border set 5px inside its edge. An auxiliary plate is white with a 2px black rule and a 6px corner. Controls use 4px or 6px.

The monogram is the initials in a rounded rectangle 1.36 times as wide as it is tall, Sign Green, with a white inset border. A year plate is 48px tall with an 8px corner and the same inset border, in its lane's colour, showing the entry's start year in full. Bullets are 14px rings.

The gore and the merge are triangles of zebra hatching; the median is the same hatching between two solid 3px lines.

### Named Rules

**The Inset Border Rule.** Anything that is a sign carries a white border inside its edge. Boards do not.

**The Start Year Rule.** A plate shows the year an entry began, written in full (2021). Nothing is numbered 01, 02, 03.

## Components

### Buttons
- **Contact control (header):** Gate Purple, 2px white border, 6px corner, 36px tall, with the distance left to the contact section. Hover is Gate Purple Deep.
- **Contact sign (top of the page):** The page's primary action. A Gate Purple guide sign with the word Contact and a solid arrow pointing down the road.
- **Send:** Gate Purple, 56px tall, full width of the form's board, arrow at the right. Disabled is Board Ink Soft with a progress cursor.
- **Language switch:** Two segments inside a 2px white border; the active one is white with ink text and `aria-pressed`.

### Profile links
- **Style:** White with a 2px ink border, 44px tall, led by a Sign Green square holding a solid arrow. Used for GitHub, LinkedIn and Instagram.
- **State:** Hover inverts to ink with white text.

### Cards / Containers
- **Guide sign:** Sign Green, 14px corner, white inset border. Holds a name, at most a sentence, and rows that lead somewhere.
- **Entry sign:** A guide sign with the year plate at left, the name and a meta line, and a solid arrow at right.
- **Board:** White, 14px corner, no border. The account, a figures table (2px ink top and bottom, hairlines between), ring bullets, links.
- **Pavement block:** A square-edged field in the lane's colour at the head of its lane.
- **Event sites:** Screenshots two across on the Projects lane's first board, each with a 2px ink frame, a name and years; hover turns the frame Lane Blue and scales the image to 1.05.
- **Shadow Strategy:** None.

### Inputs / Fields
- **Style:** White, 2px ink border, 4px corner, 16px text, bold label above.
- **Focus:** Border and 3px outline in Lane Blue.
- **Error:** Border turns Stop Red and a Stop Red message with a warning sign appears below; focus moves to the first failing field. Sending and failure are reported in a status line under the button.
- **Sent:** The form is replaced by a board that says the message was sent and when to expect a reply, with a button to write another.

### Navigation
- **Header (1100px and up):** Each section's name with the distance left to it in kilometres (1,000px of page is 1 km), written from real scroll position on every frame; a passed section reads 0 km and dims.
- **Header (below 1100px):** A down arrow, the next section's name and its distance, linking to it; the word "Next" appears from 480px. A menu button opens the full list: a green sign with each section on the left and its distance on the right.
- **Lane gantry:** A steel beam with one green sign per lane, stuck under the header for the whole length of the two lanes. Each sign jumps to its lane; on hover it takes its lane's colour.
- **Addressing:** Every section and entry has an anchor, and the URL hash follows the section in view.

### Signature Component: The Painted Name
The name is the first thing on the road, in two lines of white road lettering, laid down along the direction of travel when the page loads. Under it, two auxiliary plates: the name in the other script, and the role.

### Signature Component: The Junction
Two lanes side by side with a hatched median between them, opened by a gore and closed by a merge, under a gantry that travels with the reader. Roles on the left, the work they produced on the right.

### Signature Component: The Availability Board
An LED Black panel in DotGothic16 beside the name: what the engineer is open to, in amber with green status.

## Do's and Don'ts

### Do:
- **Do** keep asphalt as the ground everywhere, with the edge lines unbroken.
- **Do** put anything to be read on a white board.
- **Do** keep Work and Projects side by side from 980px.
- **Do** use blue only for Work, vermilion only for Projects and purple only for contact.
- **Do** give every sign its white inset border and both scripts.
- **Do** write plain, professional copy that names things for what they are.
- **Do** write every string in both `en` and `ja` in `data/content.ts`.
- **Do** honour `prefers-reduced-motion`: paint is simply there.

### Don't:
- **Don't** write road puns, slogans or themed labels (no "toll gate", "exit", "drive safely", "expressway" names).
- **Don't** add playful gadgets that exist for the theme: trip meters, receipts, lifting barriers.
- **Don't** add a shadow, a blur or a gradient used as colour.
- **Don't** set body text directly on asphalt or run paragraphs on a green sign.
- **Don't** use road lettering for anything but the name and the lane names.
- **Don't** stack the two lanes on a wide screen, or bring back a centred name with coloured bands under it.
- **Don't** present machine-learning or computer-vision work as a headline; the thesis is one brief project entry without figures.
- **Don't** put text on Caution Yellow.
