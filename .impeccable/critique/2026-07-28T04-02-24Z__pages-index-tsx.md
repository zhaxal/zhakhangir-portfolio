---
target: portfolio homepage (pages/index.tsx) — post full-height-hero re-run
total_score: 28
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
timestamp: 2026-07-28T04-02-24Z
slug: pages-index-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scroll progress, `aria-expanded` toggles, contact-form states all solid; minor deduction since the full-height hero now signals nothing about content below the fold |
| 2 | Match System / Real World | 4 | Plain engineering language throughout, numbers stated as numbers |
| 3 | User Control and Freedom | 3 | Language switch, Escape closes mobile menu, grid toggle reversible |
| 4 | Consistency and Standards | 4 | One hairline, one red, one radius rule, applied uniformly — `Glyph`/`Tag` reused everywhere, including the new `linkLabel` |
| 5 | Error Prevention | 3 | Required-field checks, `maxLength`, duplicate-submit guard via `status==="sending"` |
| 6 | Recognition Rather Than Recall | 4 | Nav labels match headings, capability chips mirror hero labels — no longer over-repeated (Round 2 fix holding) |
| 7 | Flexibility and Efficiency | n/a | Single-page marketing site, no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 3 | Strong everywhere except the newly full-height hero, which now trades density for whitespace right where the product's own principles call for evidence-per-second |
| 9 | Error Recovery | 4 | Timeout vs. failure distinguished, focus moved to first invalid field |
| 10 | Help and Documentation | n/a | Not applicable to this product type |
| **Total** | | **28/32** | **Good** |

## Design Specificity Verdict

**LLM assessment:** Still a genuinely specific system, not template output — Archivo at 118% stretch, 0-radius-except-pills, one rationed red, desaturate-to-color thumbnails, an Inverting Row gated on real `href`. Three rounds of edits show real design reasoning in the code itself (comments explaining *why*, e.g. the `linkLabel` accessibility rationale, `Header.tsx`'s dynamic hero-height measurement) rather than surface tweaks. Reads like a director's system, not a generated one.

**Deterministic scan:** Same single finding as every prior run — the documented 15px `+` glyph exception in `Capabilities.module.css:80` — re-confirmed as a false positive. No new findings on `Hero.module.css`'s `min-height` change or `Work.module.css`'s new `.plateLinkLabel` class; both agents independently checked and found nothing to flag (the label's 12px font-size matches the existing type ramp used by `.eyebrow`/`.stat`/`.cue`). Net: 0 real mechanical findings, unchanged across all three runs.

**Visual overlays:** Still unavailable this session — no browser automation tool exposed. Notably, a process does appear to already be listening on `localhost:3000` (a dev server), but with no browser tool to drive it, nothing could be captured. Both assessments reasoned from source and did the layout arithmetic by hand; treat the full-height-hero findings below as the most render-dependent in this report and worth a real look in your own browser.

## Overall Impression

The Round 1/2 fixes are holding up cleanly — the video link now has real, accessible label text; the hero and thesis-plate copy are near parity with their siblings; nothing regressed. Heuristic total recovered from 21/32 back up to **28/32**, above where this critique started. The one open question is the full-height hero from Round 3: the layout math holds (nothing overlaps or breaks on the geometries checked), but it's a real trade — a full first screen of identity-only content costs a scroll that used to be free, at the exact moment the product's own principle says both halves must land in a single pass.

## What's Working

- **The `linkLabel` mechanism** (`data/content.ts`, wired through `Work.tsx`) is a well-reasoned accessibility fix — the video link now has real text ("Watch the 10s demo"), not an `aria-hidden` icon doing double duty. Confirmed by both assessments independently.
- **`Header.tsx`'s dynamic hero measurement** (`hero?.offsetHeight` at runtime, not a hardcoded vh assumption) means the scroll-triggered header state stays correct across breakpoints and content-length changes without maintenance — exactly the "built to be neglected" property PRODUCT.md asks for.
- **`Contact.tsx`'s error handling** remains the standout: a 15s timeout race against Firestore's offline queueing, distinct timeout-vs-failure copy, explicit focus management to the first invalid field.

## Priority Issues

**[P2] The full-height hero costs evidence-first density on desktop, where the previous 76vh let the first project plate peek into view**
- **Why it matters:** A recruiter on a laptop viewport previously saw a sliver of the first Work plate below the hero, an implicit promise that proof was one scroll away. Now the hero consumes the entire screen for identity content alone (name, one-line intro, capability labels) with no plate visible — a full screen spent on zero new information, directly taxing the 90-second/single-glance budget the product principles set.
- **Fix:** Cap the desktop hero below 100vh again (back toward ~76–85vh), or keep the full-bleed treatment only on mobile — where the layout math shows it's harmless — and differentiate by breakpoint.
- **Suggested command:** `/impeccable adapt` or `/impeccable layout`

**[P2] Landscape phones: hero grows past 100dvh and pushes the scroll cue below the first visible screen, with no short-viewport fallback**
- **Why it matters:** At landscape phone heights (~360–430px), computed content height (~460px: padding + meta block + headline + foot + gaps) exceeds available `dvh`, so `min-height` correctly grows the hero rather than clipping it — no overlap — but the practical effect is a "Scroll" cue that sits below the first landscape screen, the opposite of what a scroll affordance should do. The mobile hamburger panel already solves this exact class of problem (`Header.module.css:276-286`, a `@media (max-height: 480px)` fallback); the hero has no equivalent.
- **Fix:** Add a matching `@media (max-height: 480px) { min-height: auto }` (or similar) to `.hero`, so it sizes to content rather than forcing full height on short/landscape screens.
- **Suggested command:** `/impeccable adapt`

**[P3] `dvh` recalculates during scroll, creating a small jank risk at the hero→first-plate transition**
- **Why it matters:** The `min-height: 100vh; min-height: 100dvh;` cascade itself is correct (no double-apply), but `dvh` is dynamic — as mobile browser chrome collapses during the user's first scroll, `100dvh` can grow, and because the hero's content is shorter than the viewport on most phones, its box can reflow by a few px exactly while the recruiter's eye is landing on the first piece of proof.
- **Fix:** Low priority given the magnitude — if it matters, swap to `100svh` (small viewport height, stable during scroll) and accept a marginally shorter hero when browser chrome is visible.
- **Suggested command:** `/impeccable optimize`

**[P3] Headline's `white-space: nowrap` can hit its `clamp()` floor on the narrowest phones (≤375px) — pre-existing, not touched by any of the three rounds**
- **Why it matters:** At ~375px viewport width, `clamp(30px, 6.6vw, 116px)`'s preferred value falls below its floor, so "ZHAKHANGIR" renders at a fixed 34px with no wrap permitted — on the narrowest supported phones (320–360px class devices) this plausibly runs into the gutter. Lower-confidence without a live render, but it's the single largest, most identity-critical element on the page.
- **Fix:** Verify on a 320px-wide viewport; lower the floor slightly or allow a controlled wrap at the narrowest breakpoint if it clips.
- **Suggested command:** `/impeccable audit`

## Persona Red Flags

**Casey (distracted mobile, quick scroll):** Portrait-phone layout math holds — everything fits one `100dvh` screen with room to spare, nothing overlaps. But that screen is now identity-only; her first scroll gesture lands on more hero, not proof, which is a slightly worse bet than before Round 3 for someone judging in under a minute with tabs open.

**Japanese hiring manager (project-specific — phone, limited English):** Same structural risk as Casey — one extra full screen before reaching the Work plates that prove the hardware half. Matters more for a reader parsing a second language under time pressure, who has less slack to spend on a low-information first screen.

**Jordan (accessibility/screen-reader):** No new issue from Round 3 (hero markup unchanged, CSS only). Round 1/2's `linkLabel` fix continues to hold up as a genuine win here.

## Minor Observations

- `Header.module.css:276-286` already has a `max-height: 480px` landscape fallback for the mobile nav panel; the hero — now the component most exposed to short-viewport geometry — has no equivalent, which is an inconsistency worth closing alongside the P2 landscape fix above.
- Worth double-checking that `prefers-reduced-motion` coverage extends to the hero's own `zaGrad`/`zaKen` background and photo keyframe animations, not just the `Reveal` system — not confirmed either way from source alone.
- Thesis-plate/Looq-plate parity is close but not exact (140 vs. 96 chars, 4 tags each) — acceptable, not worth further churn.

## Questions to Consider

1. If the hero's own content only fills ~60–70% of a typical portrait phone screen, is chasing 100dvh worth it, versus sizing the hero to its content and letting natural whitespace do the same job without sacrificing the first-plate peek on desktop?
2. The stated differentiator is "both halves in a single pass" — does a hero with room to spare represent a missed chance to preview the web/hardware split inside the hero itself, rather than making the reader wait a full screen for it?
3. Was the full-height hero checked against the actual target personas (recruiter, phone, &lt;60s, multiple tabs), or optimized for how it looks in isolation on a wide desktop monitor?
