---
target: portfolio homepage (pages/index.tsx) — post landscape-fallback re-run
total_score: 32
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 0
timestamp: 2026-07-28T04-22-22Z
slug: pages-index-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Scroll progress, header scroll-state, `aria-expanded`/`aria-live` throughout — solid |
| 2 | Match System / Real World | 3 | Copy is evidence-first, JA structurally parallel to EN — except the Moscow Sport grid (see P2 below) |
| 3 | User Control and Freedom | 4 | Language toggle, Escape-closable panel, no forced modals |
| 4 | Consistency and Standards | 4 | Link-glyph convention, pill controls, invert-only-on-real-href held consistently — one real exception found this round (Moscow Sport names) |
| 5 | Error Prevention | 3 | Validation plus focus-shift to first bad field |
| 6 | Recognition Rather Than Recall | 3 | Header nav covers only Work/Experience, acceptable for a one-page scroll but not free |
| 7 | Flexibility and Efficiency | 3 | Progressive disclosure, hover-substitute for touch, bilingual toggle — judged applicable this round, unlike prior runs |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained and consistent outside the hero's own motion stack |
| 9 | Error Recovery | 4 | Distinct required/invalid/timeout/failed states, each with a stated recovery route |
| 10 | Help and Documentation | n/a | No task in this product is complex enough to need it |
| **Total** | | **32/36** | **Good** |

*Note on denominator: this run's independent assessor judged heuristic #7 applicable (scored 3) where prior runs marked it `n/a` — both are defensible calls for a Persuade-mode surface with light progressive disclosure. Treat 32/36 as its own measurement, not directly stackable against the prior 28/32.*

## Design Specificity Verdict

**LLM assessment:** Still a genuinely specific system. The CSS and content files carry design-rationale comments (`Hero.module.css:179-184`, `data/content.ts:72-76`) showing deliberate, load-bearing decisions rather than defaults — it reads as authored, not templated.

**Deterministic scan:** Same single finding as every prior run — the documented 15px `+` glyph exception — re-confirmed as a false positive. Zero unresolved/novel findings.

**Visual overlays:** Still unavailable — no browser tool exposed. A dev server does appear to be running on `localhost:3000` (confirmed again this round), but nothing here can drive a browser against it.

## Overall Impression

Two things resolved cleanly this round, and one real, previously-unflagged issue surfaced. **The landscape-hero fallback is confirmed working** — both assessments independently traced the CSS cascade and reached the same conclusion: the `@media (max-height: 480px)` block is the last rule affecting `.hero` in source order, so `min-height: auto` correctly wins on any short/landscape viewport, with no specificity bug. **The full-height-hero-on-desktop trade-off is being treated as accepted, not re-flagged** — you made that call explicitly last round, and re-litigating a decision you already made with full information would be noise, not critique. What's new: the Moscow Sport grid — the section carrying the "10+ sites, 5,000+ users" volume evidence — renders card names in English even in JA mode, which nobody had caught in three prior passes.

## What's Working

- **Contact failure handling remains the standout**: a timeout race against Firestore's offline-queue behavior, with every failure state naming a specific recovery path.
- **The invert-only-if-real-href rule has a code guarantee behind it**, not just a description — confirmed again this round by direct inspection.
- **Reduced-motion is a real blanket rule** (`globals.css:270-284`) — the hero's four-effect animation stack, the reveal system, and the cursor all correctly collapse for users who ask for it.

## Priority Issues

**[P2] Moscow Sport card names are English-only even in JA mode**
- **Why it matters:** `WorkCard.name` is typed as a plain `string`, not `Localized` (`data/content.ts:53-58`), and `Work.tsx:121` renders it unconditionally regardless of `lang`. This is the volume-evidence grid — nine cards proving the web-dev half of the pitch — and it silently drops out of Japanese even after a hiring manager has explicitly switched locales, breaking "both locales first-class" for exactly the content carrying half the positioning. `Publications` handles the same English-title situation deliberately via an explicit `both()` call; here it reads as an oversight, not a decision.
- **Fix:** Either wrap each `name` in `both()` if the English site names are intentional (they likely are, since they're real product names), making the choice legible as a decision — or add real JA glosses.
- **Suggested command:** `/impeccable clarify` or `/impeccable harden`

**[P2] The thesis plate's primary link still doesn't say what it opens — the fix from two rounds ago was added alongside, not applied to, the first link a visitor actually meets**
- **Why it matters:** The plate title itself is a link to `demo.mp4` carrying only a generic `↗` (`Work.tsx:50-63`), with the descriptive "Watch the 10s demo" link added as a *second*, separate link immediately below pointing at the identical href (`content.ts:167-171`). The bold title is the natural first tap target, and it's the one that still gives no warning it opens a raw video rather than a page — the accessible-name fix landed next to the problem, not on it.
- **Fix:** Either drop the `href` from the title (leaving only the labeled link clickable) or move the descriptive label onto the title link itself and remove the duplicate.
- **Suggested command:** `/impeccable clarify`

**[P3] Hero runs four concurrent motion effects on load** — Ken-Burns pan, 24s gradient shift, staggered fades, and a looping scroll-cue pulse all fire together for anyone without `prefers-reduced-motion` set. Not an accessibility problem (correctly suppressed under reduced-motion), but more simultaneous movement than the restraint shown everywhere else in the system. *Fix: consider dropping one of the gradient shift or Ken Burns pan — the mask-reveal alone already carries "engineered."* → `/impeccable quieter`

**[P3] CTA still disappears entirely below 374px width** — documented and deliberate (`Header.module.css:317-320`), Contact remains one tap away via the hamburger. Flagged only because "get a reply" is the site's whole point and this is the one breakpoint where the persistent CTA vanishes. → `/impeccable adapt`

**Confirmed, not open issues:**
- Landscape hero fallback (Round 4) — verified working by CSS cascade analysis from both assessments independently. No bug.
- Full-height hero on desktop/portrait (Round 3) — a trade-off you explicitly chose to keep; not re-flagged.

## Persona Red Flags

**Jordan (fast skimmer, <5s/screen):** On a portrait phone, the first full screen is still 100dvh of identity-only hero — no screenshot, no number, no proof, until one deliberate scroll. Surfacing the accepted trade-off concretely, not a new bug.

**Casey (screen-reader/keyboard):** Mostly well-served — but hits the redundant same-target tab stop on the thesis plate (P2 above), and in JA mode hears English project names read aloud mid-Japanese-content with no signal why.

**Japanese hiring manager (project-specific):** Hero and Capabilities correctly front-load both halves of the pitch in JA. Scrolling into the Moscow Sport grid — the section meant to prove volume — switches back to unexplained English labels, for exactly the audience most likely to be confused by that switch and least able to spare the time to puzzle through it.

## Minor Observations

- `Reveal` wraps the plates individually but not the Moscow Sport grid cards or Capabilities rows — plausibly intentional (below-the-fold doesn't need an entrance beat), worth confirming.
- The `nowrap` headline is plausible at its clamp floor for both EN/JA from source math, but remains the one claim in this whole critique series that most wants a live render to fully trust.
- The hero `stat` line ("Portfolio · 2019 — 2026") is generic filler next to everything else in the hero, which is otherwise dense with real numbers — a mild missed opportunity.

## Questions to Consider

1. If the hero's job is now "spend a full screen convincing someone to keep scrolling" rather than "show the first plate," has the copy actually been rewritten for that job, or is it still the intro written for the old 76vh hero with a peek beneath it?
2. Why does Publications get a coded localization guarantee but the Moscow Sport grid doesn't — was English-only ever actually decided, or did it just happen?
3. The thesis plate now carries two links to one destination — is the title link pulling its weight, or would the system be more honest with exactly one link per destination?
