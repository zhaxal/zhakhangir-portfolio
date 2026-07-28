---
target: portfolio homepage (pages/index.tsx)
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 1
timestamp: 2026-07-28T03-25-43Z
slug: pages-index-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | `LanguageProvider` always paints EN first, then swaps post-hydration (`contexts/language-context.tsx:52,56-59`) — a visible flash for the primary JA audience |
| 2 | Match System / Real World | 4 | Plain, direct copy in both locales |
| 3 | User Control and Freedom | 3 | Escape closes the mobile panel; no cancel on the 15s submit timeout, but low-stakes |
| 4 | Consistency and Standards | 3 | Footer's full-width 36px solid red strip is a color block, not one of DESIGN.md's four sanctioned "mark" forms (dot/rule/focus-ring/progress-bar) — a fifth, undocumented red usage |
| 5 | Error Prevention | 3 | Required/maxLength + inline validation; Firestore spam/rate-limiting unconfirmed (no rules file in repo — absence not proven, just unevidenced) |
| 6 | Recognition Rather Than Recall | 4 | Active language pill, sticky nav, unsent form text preserved on error |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing surface for first-time skimmers; no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely disciplined — one hairline, one accent, two radii, four opacity tiers, enforced almost everywhere |
| 9 | Error Recovery | 4 | Distinct `emailInvalid` / `emailRequired` / `failed` / `timedOut` states, each naming a concrete recovery route — rare care for a portfolio contact form |
| 10 | Help and Documentation | n/a | Nothing here needs documentation |
| **Total** | | **27/32** | **Good** |

## Design Specificity Verdict

**LLM assessment:** Could not be swapped onto an unrelated portfolio without visibly breaking. `Work.tsx` is structurally organized around the site's one differentiated claim — CV/hardware plates render first, Moscow Sport volume grid second, with a code comment explaining why. Tag vocabulary (OAK-D Lite, Hailo NPU, YOLOv8n) and publication venues (CIGR, CET) are specific, sourced content, not filler. The content architecture *is* the argument — genuinely authored for this person, not category-interchangeable.

**Deterministic scan:** 1 finding from `detect.mjs` — `design-system-font-size` at `components/sections/Capabilities.module.css:80` (`.chip::before { font-size: 15px; }`, a `+` glyph before each capability chip). **This is a false positive.** DESIGN.md documents it explicitly: *"One documented exception to the ramp: the red `+` that prefixes each capability chip is set at 15px. That is a glyph being optically matched to 12px text beside it, not a type role."* The detector has no way to read that carve-out; the codebase is correctly implementing a spec exception, not violating the ramp. Net: the mechanical scan is clean once this is discounted — 0 real findings, which corroborates the "disciplined execution" read from the manual review.

**Visual overlays:** Not available this session — no browser automation tool (Playwright, Puppeteer, or a browser/canvas MCP) was exposed, and no dev server was already running. No user-visible overlay was produced; both assessments relied on static source (JSX/CSS/content data) reasoning instead of a live render. Treat framing-dependent findings below (real contrast in context, photo focal points, animation feel, headline reflow risk) as lower-confidence until checked against a live render.

## Overall Impression

This is a careful, disciplined build — the "Spec Sheet" system is followed almost to the letter in code, not just on paper, and the contact-form error handling is better than most production SaaS forms, let alone portfolios. The gap isn't craft, it's that the site's two highest-leverage moments — the hero's first five seconds and the flagship CV/hardware project — undersell exactly the claim the whole site exists to prove. A recruiter skimming in 90 seconds meets "recently started learning hardware" before anything corrects it, then reaches the one project built to prove otherwise and finds it has no link and none of its measured numbers in the rendered copy.

## What's Working

- **The contact-form error system** (`data/content.ts:387-421`) distinguishes required/invalid/failed/timeout states, each naming a concrete recovery route, and never wipes what the user typed. Verified in code, not just asserted.
- **The Inverting Row is correctly gated on `href`** (`Publications.tsx:43-58`, `Publications.module.css:17-29`) — the system's strongest visual gesture is withheld from claims that don't yet link anywhere, exactly as DESIGN.md specifies. Confirmed against the actual component, not just the spec.
- **Motion accessibility is layered three deep**: a global `prefers-reduced-motion` override, a per-hook check, and a 900ms reveal safety-net timer so content can never get stuck invisible. Thorough beyond what most portfolios bother with.

## Priority Issues

**[P0] The flagship CV/hardware project has no link and no numbers**
- **Why it matters:** The "tomato-harvesting robot vision" plate is rendered first in Work specifically to carry the on-device-vision half of the site's one differentiated claim — yet it's the single least-evidenced item on the page. It has no `href` at all in `data/content.ts` (the Looq plate right below it does: `href: "https://looq.jp"`), and its description omits every differentiating number (2.4cm mean error, 12–15 FPS, ~$410 stack, live greenhouse validation). It currently has weaker proof than any of the nine Moscow Sport cards, which directly undermines Product Principle 2 ("evidence, not adjectives") on the page's most important claim.
- **Fix:** Link to the thesis PDF, repo, or demo video, and move the measured numbers from PRODUCT.md into the rendered `plateDesc`/tags.
- **Suggested command:** `/impeccable clarify` (copy/evidence) or `/impeccable harden` if the link target doesn't exist yet and needs a plan.

**[P0] Hero copy undersells the hardware half at the highest-attention moment**
- **Why it matters:** `hero.intro` reads "Software engineer with proficiency in web development, recently started learning hardware" (`data/content.ts:34`, mirrored in JA at line 35) — read in the first five seconds, before Work ever corrects it, framing validated production CV work (greenhouse-trial-tested, published) as a beginner hobby. Directly works against Product Principle 1 (both halves legible in a single pass).
- **Fix:** Replace with an outcome-forward line naming both halves plainly, e.g. "Ships production web platforms and on-device computer vision — event sites at 5,000+ users, a stereo-depth camera validated in a live greenhouse trial."
- **Suggested command:** `/impeccable clarify`

**[P1] All four publication rows are unlinked**
- **Why it matters:** None of the entries in `publications.rows` (`data/content.ts:342-363`) carries `href`. The Inverting Row correctly never fires (per spec), but the net effect is a whole section of stated credentials with zero verification path — violating "evidence, not adjectives" for the entire section. The two most Japan-salient entries (CIGR World Congress Kyoto, IVS 2026 Kyoto) are exactly what a Japanese hiring manager could most easily recognize and would most want to check.
- **Fix:** Link the CET papers via DOI, CIGR via the congress program page, IVS via the event page — even before screenshots exist.
- **Suggested command:** `/impeccable clarify`

**[P2] No-JS users permanently lose the Capabilities prose**
- **Why it matters:** The accordion starts fully closed and opens only via `onClick`; without JavaScript the toggle never fires, and the body carries `inert` (`Capabilities.tsx:66`), removing the explanatory sentences for both "Web Development" and "Computer Vision & Hardware" from the accessibility tree as well as visually. This is a real edge-case violation of "built to be neglected" combined with the static-export, zero-JS-fallback scenario PRODUCT.md calls out.
- **Fix:** Default-open on the server-rendered pass, or move the summary sentence out of the collapsible region entirely.
- **Suggested command:** `/impeccable harden`

**[P3] Header control density forces the CTA to disappear on the smallest phones**
- **Why it matters:** At ≤374px, `.cta { display: none }` (`Header.module.css:317-320`) because wordmark + 2 nav links + EN/JA toggle + CTA + hamburger can't share one row. Contact is the one action the entire site optimizes for, and it's the first thing sacrificed under space pressure — still reachable via the hamburger, but that's an extra step for a distracted reader.
- **Fix:** Collapse nav links into the hamburger, or use an icon-only language toggle, before dropping the primary CTA.
- **Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Jordan (confused first-timer, mobile):** Reads "recently started learning hardware" and files this as primarily-a-web-dev before Work corrects it. Reaches the tomato-robot plate, sees a "Computer Vision" chip, but the title isn't a link — no `↗`, no cursor affordance, nothing to tap to confirm this is real deployed work rather than a course project.

**Riley (deliberate stress tester):** Disables JS — the Capabilities accordion becomes a dead button whose body is unreachable even to a screen reader (`inert`). Empties the contact form and submits — focus correctly jumps to the email field, the one place the site holds up well under stress.

**Casey (distracted mobile user):** Skims fast, relies on the two large Work plates to do the hierarchy work — that part is well-designed. Lower-confidence (unverifiable without a live render): the display headline uses `white-space: nowrap` at a `clamp()` size keyed to Archivo's metrics; a fallback-font swap before Archivo loads could visibly reflow the largest element on the page during the exact window Casey is skimming in.

**Japanese hiring manager (project-specific — phone, limited English, primary audience per PRODUCT.md):** On load, sees a brief flash of English hero/nav copy before the JA swap completes, even with browser locale set to `ja`. Reads the JA hero line "最近ハードウェアも学び始めました" — same underselling problem as the EN copy. Reaches Publications hoping to sanity-check the CIGR Kyoto and IVS Kyoto entries — both local, both plausibly checkable by someone in the Japanese research/industry community — and finds every row a dead `<div>`, not an `<a>`.

## Minor Observations

- No custom 404, no `og:image`/`twitter:card` — confirmed absent in `pages/_app.tsx`; a shared portfolio link previews with no image.
- `plateYear`/`cardYear` use `--text-faint` (4.68:1) at ~11–20px — technically clears AA but with minimal margin; worth a render-check rather than trusting the math alone.
- `SectionTitle`'s `aria-label={lines.join(" ")}` inserts an ASCII space between Japanese words (e.g., "スキルと ツール") — minor, JA doesn't normally space between words.
- The VDNH ("GTO Point at VDNH") card previously flagged in PRODUCT.md as an open gap already has both a data entry and `public/projects/gto.jpg` committed — appears resolved, not still open.
- The one real detector finding (15px `+` glyph in Capabilities) is a documented spec exception, not a defect — see Design Specificity Verdict above.

## Questions to Consider

1. If the CV/hardware claim is one of two pillars, why does its flagship project have less evidence attached than any of the nine web-scale side projects — oversight, or is the thesis genuinely not shareable yet?
2. The hero copy reads like a modest personal bio; the rest of the system reads like a spec sheet built to survive scrutiny. Which voice is this site actually trying to have?
3. Given the primary persona is a time-pressured Japanese recruiter, is defaulting first paint to English before `ja` detection resolves an acceptable trade for static-export simplicity, or does it deserve a build-time fix?
