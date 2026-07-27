---
target: portfolio
total_score: 23
max_score: 36
na_heuristics: 10
p0_count: 1
p1_count: 2
timestamp: 2026-07-27T14-45-37Z
slug: pages-index-tsx
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Progress bar, accordion toggle and 4-state `aria-live` form status all correct; but on an 8,372px page no nav link ever shows an active-section state. |
| 2 | Match System / Real World | 2 | Hero says "recently started learning hardware" against a validated thesis and a shipped product; in 日本語 the name renders katakana-only while the wordmark stays Latin. |
| 3 | User Control and Freedom | 3 | Escape closes the panel, language persists, reduced-motion honoured, failed submit preserves the message. No back-to-top on a 10-screen page. |
| 4 | Consistency and Standards | 3 | Hairline/zero-radius/four-whites discipline held without drift. Two breaks: `a:hover` puts every link's text at 3.94:1 (DESIGN.md forbids red words); publication rows invert dramatically but are inert `<div>`s. |
| 5 | Error Prevention | 3 | Custom validation, maxLength 254/4000, 15s timeout race against Firestore's offline buffer, `<noscript>` mailto. Neither required field marked required before submit. |
| 6 | Recognition Rather Than Recall | 2 | Capabilities accordion ships all rows closed — the tech stack is zero visible characters, and the two visible labels duplicate the hero verbatim. |
| 7 | Flexibility and Efficiency | 1 | Scored, not n/a: no route past the 2,644px screenshot wall, no section index, no jump to the two things a repeat visitor wants. |
| 8 | Aesthetic and Minimalist Design | 3 | Strongest axis — severity executed, not merely declared. Deductions for redundancy and voids: socials duplicated within ~700px on phone; dead space at the contact section. |
| 9 | Error Recovery | 3 | Plain error copy, red-dot/white-text idiom correct, timeout routes to mailto. Focus never moves to the first invalid field; field errors carry no `role="alert"`. |
| 10 | Help and Documentation | n/a | A single-page portfolio has no task requiring instructions; none implied. |
| **Total** | | **23/36** | **Acceptable (64%)** |

## Design Specificity Verdict

**Split: the visual language is authored for this product; the information architecture is not.**

**LLM assessment.** Genuinely specific and unliftable: the project plate at 78% width with alternating auto-margin, so exactly two hardware artifacts bleed to opposite page edges; the nine-up 4:3 grid rendered as one grayscale texture, which is a specific answer to nine clashing client brands rather than a pattern; `//2022–25` in italic Space Grotesk as the "this is data" gesture; the 36px red strip closing the document; the inverting publication row. Strip the content and the token set is portable — fine, a system should be — but the composition is bespoke.

What is *not* authored is the reading order. hero → work → skills → experience → publications → contact is the default portfolio template, unchanged, optimised for a reader with unlimited time. PRODUCT.md names six measured numbers; **two appear on the page**, both buried in body copy on screen 6. The greenhouse plate — the artifact proving the differentiating half — describes itself as "Stereo depth and on-device ripeness detection on an edge device," a sentence that would fit any CV project anywhere. The brief's second principle is "Evidence, not adjectives"; the plate is adjectives.

The site looks like nobody else's and says what everybody else says.

**Deterministic scan.** 5 findings across `pages`, `components`, `styles`, `out/index.html` — **all five adjudicated false positives**, verified in context:

- `overused-font` ×3 (`_document.tsx:16`, `out/index.html:1` ×2) — one root cause. Space Grotesk is declared once and consumed in exactly the two documented places (`Experience.module.css` period column, `Footer.module.css` site URL); a repo-wide grep finds no other consumer. Pinned by the handoff and documented in DESIGN.md.
- `design-system-font-size` 15px (`Capabilities.module.css:108`) — the red `+` glyph, documented in DESIGN.md prose as an explicit optical exception. The detector parses frontmatter only, so it fires correctly by its own mechanics. No genuinely undocumented sizes exist.
- `em-dash-overuse` (`out/index.html`) — 10 em-dashes / 3,002 chars trips the density threshold, but **one** is in running prose; the rest are date ranges, project titles and publication labels. An artifact of a single-page site whose total prose is ~3k characters.

**One real defect the detector could not see but the scan surfaced:** DESIGN.md specifies `mono.fontSize: 13px`; `Experience.module.css:17` matches, `Footer.module.css:75` uses 12px.

**Deterministic checks, all clean:** 0 console errors on load; **0 horizontal overflow** at 320/375/768/1280; 12 images, 0 missing `alt` (10 correctly decorative, 2 descriptive); 14 headings, exactly 1 `h1`, **0 level skips**; universal `:focus-visible` ring with the only `outline: none` scoped to the documented skip-link target.

**Visual overlays:** none. The Claude-in-Chrome extension is not connected, so there is no user-visible tab and no overlay was produced. All browser evidence is headless-only — reported as the fallback signal, not as a presented overlay.

## Overall Impression

The craft floor is genuinely upper-band and the strategy is mid-band, and the gap between them is the whole story. Every mechanical check passes — no overflow at any width, no heading skips, no missing alt, no suppressed focus ring, no console error, and a token system with zero drift across seven components and three breakpoints. The detector found nothing real. That is unusual and it is earned.

And it does not matter as much as it should, because the page spends its first four screens on the less differentiating half of the positioning and never states the evidence it has. The single biggest opportunity is not a fix — it is an inversion: put the hardware work and the numbers first, and let the nine screenshots prove volume in three cards instead of 2,644 pixels.

## What's Working

**The system holds without a single drift.** Radius is 0 or 999px, nothing between. Every border is `rgba(255,255,255,.14)`. Four text opacities and the codebase resists a fifth — `globals.css` documents why the handoff's `.38` became `.46`. This matters because the severity *is* the proposition: one soft corner would expose it as a costume.

**The contact form's edge handling beats most production software.** `withTimeout` races Firestore's offline write buffer at 15s specifically because Firestore queues rather than rejects. `setEmail("")` runs only after a confirmed write, so a failed send never eats the typed message. `<noscript>` replaces a dead control with a working mailto. Red dot for signal, white text for the sentence, because red is 3.94:1 and an unreadable error isn't one.

**Two decisions prove the phone audience was designed for, not assumed.** `@media (hover: none)` returns colour to the nine screenshots on touch, because without a pointer there is no way to earn it back. `[data-tap]::after` grows an invisible 44px hit pad that takes no layout space, with a `="v"` variant so shoulder-to-shoulder controls don't steal each other's taps.

## Priority Issues

### [P0] The 90-second budget is spent on the wrong half of the positioning

**Why it matters.** Measured at 375×812: the Moscow Sport grid runs 762→3,406px — **2,644px, 32% of the document, 3.3 phone screens** — before the device plates begin at 3,463px. The only quantified claims sit at 4,800px (screen 5.9); contact at 7,034px (screen 8.7). PRODUCT principle 5 is "Ninety seconds is the budget… reading order and immediacy outrank completeness." A recruiter making two or three flicks sees a name, a hedge, and Russian event posters. The half a neighbouring portfolio could not truthfully copy is unreachable inside the stated budget.

**Fix.** Swap the two JSX blocks in `Work.tsx` so the plates precede the grid; collapse the grid to three cards plus "SEE ALL 9". Moves the CV half from screen 4.3 to ~1.6 and cuts ~1,700px. Put the count in the description: "10+ event platforms · 5,000+ users · nine live."

**Suggested command:** `/impeccable layout`

### [P1] The hero's copy dismantles the positioning and carries zero evidence

**Why it matters.** `hero.intro` says "recently started learning hardware" — recasting a validated 2.4 cm stereo-depth thesis and a shipped edge-AI camera as a recent hobby. The hero contains no number, no employer, no role; its only datum is `PORTFOLIO · 2019 — 2026`. This is the one screen every visitor sees. A spec sheet reporting a hedge reads as an honest spec sheet reporting a weak spec.

**Fix.** State both halves as fact in both locales. Replace the stat line with two measured numbers the brief already licenses — the `.stat` slot and the mono numeral face were designed to hold exactly that. **This is factual copy about the author; it needs his sign-off, not a rewrite.**

**Suggested command:** `/impeccable clarify`

### [P1] Skills & Tools ships fully collapsed

**Why it matters.** `useState<number[]>([])` — every row closed. The section renders as two headings plus two `+` glyphs, and those headings are byte-identical to the two hero capability strings 4,000px earlier. Eight technologies are gated behind a tap a 90-second visitor will not make, while the section costs 400px of scroll to communicate nothing new. Stack keywords are the highest-value scan target for a hiring manager.

**Fix.** Open the first row by default, or promote the chips out of the collapsed body so the eight names are always visible and only the prose collapses.

**Suggested command:** `/impeccable layout`

### [P2] Publication rows perform the signature interaction and go nowhere

**Why it matters.** `.row:hover` inverts a `<div>` to solid white — DESIGN.md calls it "the system's sharpest gesture." No `href`, no `cursor: pointer`, not focusable. It is an affordance lie repeated four times at the moment a skeptical reader looks for proof, and it breaks principle 2 directly: both CET papers have DOIs. The strongest visual promise is attached to the weakest evidence.

**Fix.** Add optional `href` to `PublicationRow`, render as `<a>` with the `↗` Glyph. Where no URL exists, drop the inversion for that row.

**Suggested command:** `/impeccable harden`

### [P2] The footer mailto is dimmest and broken at the conversion point

**Why it matters.** `.mailto a` is `--text-secondary` (72%, the *body* tier), reaching white only on hover — which never fires on touch. The 16px links beneath it are 100% white, so hierarchy is inverted exactly at the fallback conversion route. At 375px the address breaks with `.COM` orphaned on its own line. A visibly broken email address at the moment someone decides to reach out costs credibility out of proportion to the fix.

**Fix.** `.mailto a { color: var(--white) }` at rest; `overflow-wrap: anywhere` with a lower clamp floor so it sets on one line at 375px. Delete one of the two duplicate social-link sets.

**Suggested command:** `/impeccable polish`

## Persona Red Flags

**Japanese-company recruiter, phone, 60–90s (project-specific, primary audience).** Switching to 日本語 replaces the name with katakana only (ジャハンギル / アヌアルベク) while the wordmark stays `ZHAKHANGIR` — they arrived from a résumé and LinkedIn that both say the Latin name, so the one job the hero must do, confirming "same person", fails in the locale the brief calls first-class, with two renderings on screen at once. The Japanese display type also isn't the same brand: `--display-stretch: 118%` is the system's defining characteristic and Noto Sans JP has no width axis, so JA headings render visibly narrower and lighter — side by side the locales look like two design systems. They never reach the evidence: 90 seconds of phone scrolling lands ~2,500–3,000px, still inside the grid. And the language switch is the smallest control on the site (10px at 62% white).

**Sam (screen reader / keyboard).** "MOSCOW SPORT — EVENT PLATFORMS" is a `<span>`, not a heading — navigating by heading goes `H2 Projects` → `H3 Tomato-harvesting robot vision`, so the strongest volume-of-work evidence is unreachable. Submitting an invalid form is silent: `validate()` sets state, focus stays on SEND, and errors are exposed only via `aria-describedby`, announced when focus enters the field. The four publication rows are unfocusable `<div>`s with a dramatic hover state. And `a:hover { color: var(--red-500) }` puts every hovered link's text at 3.94:1 sitewide, against DESIGN.md's own rule.

**Casey (distracted, one-handed).** 10.3 screens with no active-section indicator, no back-to-top, no index. The header stays transparent 216px too long on a phone: `scrolled` flips at `innerHeight * 0.82` = 666px, but the mobile hero is `min-height: auto` ≈ 450px — so between 450 and 666px the white wordmark and pills float over the near-black Projects section with no backdrop. The threshold is calibrated to a desktop hero that fills the viewport. Nine equally-weighted `target="_blank"` exits mid-page with no ranking. Five controls at 335px with `gap: 6px`, one of which duplicates an entry inside the hamburger beside it.

## Minor Observations

- Japanese line-breaking is unmanaged — ハードウェア and イベント break mid-word. `word-break: auto-phrase` on the display tier would fix it where it shows.
- The hero photograph is a peace-sign street snapshot in a world described as "industrial, decisive, unsentimental" — his own photo, correctly, but at 42% luminosity still legible as a casual holiday picture.
- The textarea's native resize grabber is a rounded OS artifact in a zero-radius system.
- `SectionLabel` alternates `°` and `•` with no discernible rule.
- Two nav links for a six-section page; Skills, Papers and Education are unreachable by nav.
- The `data-tap` hit-pad and the `hover: none` colour restore are two of the best decisions in the codebase and DESIGN.md doesn't know they exist — the next contributor will delete them.
- `mono.fontSize` is 13px in DESIGN.md; the footer URL uses 12px.
- Everything checks out under `prefers-reduced-motion`.

## Questions to Consider

1. **What if the hero were the spec sheet instead of the poster?** The system is called "The Spec Sheet" and the hero is the one place it isn't one. Four hairline cells reading `5,000+ USERS` / `10+ PLATFORMS` / `2.4 CM DEPTH ERROR` / `12–15 FPS ON-DEVICE` would be the most on-brief thing the language could do — and it's the one composition the system never attempts.
2. **Are nine screenshots evidence, or nine chances to leave?** Volume is the less differentiating half, and each card is an exit.
3. **Who is the katakana for?** A recruiter cross-referencing a résumé needs the Latin name. Would `ZHAKHANGIR ANUARBEK` with a small ジャハンギル・アヌアルベク beneath it be *more* bilingual rather than less?
4. **The best gesture in the system is spent on the section that matters least.** Publications are supporting evidence, not the point. What if the inversion belonged to the experience rows or the device plates?
5. **What does the site do when the form succeeds?** A 12px line, above an empty form. That is the emotional end of the journey.
6. **The design system has a rule for every colour and no rule for reading order.** If "ninety seconds is the budget" is a product principle, should DESIGN.md carry a scroll budget the way it carries a colour budget?
