---
name: Zhakhangir Anuarbek Portfolio
description: A plain, CV-like single page. System fonts, one column, default-looking links, light and dark from the OS setting.
colors:
  bg: "#ffffff"
  text: "#1f1f1f"
  muted: "#5e5e5e"
  rule: "#dcdcdc"
  link: "#0b57d0"
  error: "#b3261e"
  bg-dark: "#161616"
  text-dark: "#e8e8e8"
  muted-dark: "#a3a3a3"
  rule-dark: "#383838"
  link-dark: "#8ab4f8"
  error-dark: "#f2b8b5"
typography:
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  h1:
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.3
  h2:
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
---

# Design

Redesigned on 17 November 2026 at the owner's request: "simple and boring". The previous expressway theme (asphalt, road signs, painted lettering) is gone.

## Principles

- **It should look like a CV.** Name, links, profile, Experience, Projects, Papers, Skills, Education, Contact, in that order. No hero, no cards, no decorative images.
- **Media stays small and beside the text.** Images and video are evidence, not decoration: thumbnails sit next to the text they belong to, never above it or full width. The only motion is the thesis demo loop, which loads when scrolled near and stays still under reduced motion.
- **Browser defaults where possible.** System font stack, underlined links in a standard blue, native form controls with a thin border. No web fonts, no icon set.
- **One stylesheet.** Everything is in `styles/globals.css`, styled mostly by element. The only tokens are the six colors above; dark mode swaps them under `prefers-color-scheme: dark`.

## Layout

- One column, `max-width: 44rem`, centred, `1rem` side padding, so it works at phone width without a separate layout.
- Section headings (`h2`) have a 1px rule under them.
- Each entry has a head row (name left, dates right, wrapping on narrow screens), a muted meta line (role · location), then a bullet list.
- Skills are a two-column definition list that stacks below `30rem`.
- Event sites: a list of rows, each a `5.5rem` 8:5 thumbnail (1px rule border) then the linked name and grey years; two columns from `36rem` up.
- An entry with media (`.has-media`) is a two-column grid, text then a `10rem` media column with a small linked caption under it; below `36rem` the media drops under the text.
- Papers are a bullet-free list: linked title, then a grey venue · year line.

## Details

- Language switch: two text buttons at the top right; the current language is plain text, the other is a link-styled button.
- Muted grey is for dates, roles, locations and notes, not for body copy.
- Errors use the error color and sit directly under the field they belong to.
- Print hides the language switch, the contact form, the footer, thumbnails and video, so the page prints as a CV.
