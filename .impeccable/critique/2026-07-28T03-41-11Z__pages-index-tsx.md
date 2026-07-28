---
target: portfolio homepage (pages/index.tsx) — post-clarify re-run
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-07-28T03-41-11Z
slug: pages-index-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Contact form states + scroll progress bar are solid; unchanged from last run |
| 2 | Match System / Real World | 3 | New hero prose ("runs computer vision on self-assembled hardware") reads press-release-y against the spec-sheet register everywhere else |
| 3 | User Control and Freedom | 2 | The new `.mp4` link opens `target="_blank"` with zero framing — no cue you're about to leave the page for a bare video player, no way back |
| 4 | Consistency and Standards | 2 | Same `↗` link affordance now used identically for a webpage (Looq) and a raw video file (thesis) — one behaves like a link, the other like a download |
| 5 | Error Prevention | 3 | Unchanged — form validation solid; no equivalent guard on the ungoverned video link |
| 6 | Recognition Rather Than Recall | 2 | The "two halves" message is now stated three times in one viewport (eyebrow location + hero prose + capability list), then a fourth time in Capabilities below |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing surface, no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 3 | Thesis plate's new description (190 chars, 5 tags) now visibly outweighs its sibling Looq plate (96 chars, 4 tags), breaking the matched-pair layout |
| 9 | Error Recovery | 3 | Contact-form recovery copy still strong; scored a notch more conservatively than the first pass, no new issue found |
| 10 | Help and Documentation | n/a | Nothing here needs documentation |
| **Total** | | **21/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** The system underneath is still clearly bespoke — the alternating-plate composition, the grayscale-to-color Moscow Sport reveal, and the Inverting Row are all decisions built around "prove volume, then prove specificity, then prove it's peer-reviewed." But the new hero copy itself is generic "full-stack + computer vision" boilerplate that could sit on almost any dual-discipline engineer's site — it states the category without a number, a name, or any proof, which all live two sections further down. The fix closed the "undersells hardware" gap but didn't fully close the "sounds like anyone" gap.

**Deterministic scan:** Same single finding as last run — `design-system-font-size` at `Capabilities.module.css:80` (the 15px `+` glyph). Re-confirmed as a false positive against DESIGN.md's explicit documented exception; both this run's detector agent and the design-review agent independently verified the exact source text. Net: 0 real mechanical findings, unchanged from the prior run.

**Visual overlays:** Still unavailable this session — no browser automation tool exposed, no dev server running. Both assessments reasoned from source directly; treat framing-dependent findings (how the video actually looks in a new tab, real wrap behavior of the 5-tag row) as lower-confidence until checked live.

## Overall Impression

The two P0s from the last critique are functionally closed — the hero no longer undersells the hardware half, and the flagship project links somewhere with real numbers attached — but the fix introduced a new, real regression: linking a raw `.mp4` through the exact same affordance used for webpage links breaks the site's own consistency rule at the precise moment it matters most (the flagship proof point), and the hero rewrite over-corrected into saying the same two-halves message three times in one viewport. Net effect: heuristic total moved from 27/32 to 21/32. This isn't a sign the fixes were wrong — it's that "add the missing information" and "add it well" turned out to be two different jobs, and only the first one shipped.

## What's Working

- **The Publications href fix landed clean** — `Publications.tsx:43-53`'s "only invert on a real href" rule is implemented exactly as documented, and all four rows now correctly perform the gesture for the first time. The one clean fix of the three from last round.
- **Contact form accessibility engineering** (`Contact.tsx:84-91`) — focus moves to the first invalid field, `aria-describedby` wired to the error span. Real, not decorative.
- **`globals.css:20-24`** — the muted text ramp carries inline contrast-ratio comments (`.46 → 4.68:1`), a level of rigor most systems don't bother documenting in the code itself.

## Priority Issues

**[P1] The thesis video link has zero framing and breaks the site's own link-affordance consistency**
- **Why it matters:** `Work.tsx:51-59` renders the `.mp4` href through the identical `<a>…<Glyph/></a>` pattern used for `looq.jp` and every other external link — a generic ↗ with no signal that this one opens a 3.6MB video, not a page. A time-pressured recruiter clicks expecting a case-study page and instead lands on a bare, chromeless video player with no title, caption, or duration — right on the one proof point built to carry half the site's positioning. A screen reader announces it identically to a normal link, too — Alex (keyboard/AT persona) gets nothing that says "this opens a video."
- **Fix:** Either distinguish the affordance (a "▷ Watch demo" label instead of the generic ↗, ideally with a duration), or embed the video in a minimal in-page player so the visitor never leaves the portfolio chrome.
- **Suggested command:** `/impeccable clarify` (labeling) or `/impeccable harden` if an embedded player is the direction.

**[P2] Hero intro is now redundant with content one screen below it, and over-corrects into the longest unbroken prose above the fold**
- **Why it matters:** `data/content.ts:33-36` states "Based in Niigata, Japan" directly under an eyebrow that already says "Niigata, Japan," and states both capability halves in prose right beside a `hero.capabilities` list stating the identical two halves as short labels — which are then restated a third time as `capabilities.rows` section labels further down. The original P0 ("both halves must land in one pass") is now over-satisfied: present, but stated four times total, which costs scanning budget instead of saving it, particularly for the JA reader parsing a second language under time pressure.
- **Fix:** Cut the location clause from `hero.intro` (the eyebrow already owns it) and shorten to one declarative clause naming the two halves; let the `hero.capabilities` list carry the label-level restatement it's already doing in the same viewport.
- **Suggested command:** `/impeccable clarify`

**[P3] Thesis plate now visibly outweighs its sibling, breaking the two-plate parity the layout implies**
- **Why it matters:** The thesis description runs 190 characters against Looq's 96, with 5 tags against Looq's 4, inside a shared layout with no per-plate height reservation. The alternating-plate composition is designed to read as a matched pair; one plate now runs visibly denser than the other, undercutting the "these two things are equally weighted" argument the section makes — the same argument the hero fix was meant to protect.
- **Fix:** Trim the thesis description toward parity with Looq's length, or fold "Raspberry Pi 4" into "OAK-D Lite" as one hardware tag since both already appear in the prose.
- **Suggested command:** `/impeccable clarify` or `/impeccable layout`

**[P4] Publication links carry no signal that they lead to external academic pages (DOI/conference sites) rather than simple project links**
- **Why it matters:** Lowest-stakes item — a Japanese-reading recruiter clicking a CET DOI may land on a publisher abstract/paywall page with no portfolio context to return to. Minor since these are optional-depth links, not primary proof.
- **Fix:** Optional — a small "DOI ↗" vs. "Event ↗" distinction would cost little if this gets picked up.
- **Suggested command:** `/impeccable clarify`

**Verdict on the three previously-fixed items:**
1. Hero intro — landed, but over-corrected into redundancy (P2 above). Not broken, but not clean.
2. Thesis plate link — technically works, but the UX around it is a regression (P1); the description/tags do crowd the plate relative to Looq, confirming the suspected asymmetry (P3).
3. Publications hrefs — correctly implemented per the system's own "no invert without href" rule. No problems found; this is the one clean fix of the three.

## Persona Red Flags

**Riley (skeptical verifier):** Clicks the thesis video expecting proof-of-work, gets an unlabeled stream with no context — slower to verify than a captioned screenshot would have been. Also catches that `hero.intro` and `capabilities.rows` say the same two phrases twice on one page — reads as copy that wasn't proofread as one system.

**Casey (visual/emotional, 3-second read):** The two project plates are meant to be a matched visual beat; the thesis plate's longer paragraph and 5-tag row (which wraps to two lines on narrower viewports, unlike Looq's) reads as "unfinished" even without reading the words.

**Alex (accessibility/keyboard path):** Tabbing to the thesis plate, a screen reader announces "Tomato-harvesting robot vision, link" — identical to every other external link, with nothing communicating "opens a video." Removing the visual arrow (per `Glyph.tsx`'s AT-suppression) without adding a text cue removes information instead of decluttering it.

**Japanese hiring manager (project-specific — phone, limited English, primary audience):** Reads the JA hero — grammatically fine, but a 69-character compound sentence naming two disciplines plus a location, immediately followed by the same two discipline names restated one line below. For a reader parsing a second language under time pressure, repetition reads as the page not being sure what it wants to say. Reaching the thesis plate, she taps expecting a Japanese-friendly case-study page — the JA description promises "温室での実証実験で検証済み" (validated in a greenhouse trial) — and instead gets a silent video with no on-screen text in either language, so the numbers she just read never actually connect to what she's watching.

## Minor Observations

- Desktop nav (`Header.tsx:70-73`) still only lists Work/Experience — Publications and Contact are scroll-only, worth a second look now that Publications is meaningfully link-worthy for the first time.
- Still no OG/social preview image — confirmed pre-existing, not a regression from this round's edits.
- The thesis plate's hand-tuned `focus: "50% 35%"` is a nice touch for the *image*, but the video it links to has no equivalent framing device (no poster frame, no embedded player) — the care applied to the photo wasn't extended to the thing the photo now links to.
- The 15px `+` glyph detector finding is, again, a documented spec exception, not a defect — see Design Specificity Verdict.

## Questions to Consider

1. If the video is worth linking at all, does it deserve the same UI investment every other proof point on the page gets (a caption, a frame, a context) — or was "shipped" treated as equivalent to "done"?
2. The hero now states the two halves in prose, in a list, and again as section labels — was "say it three times" really the right instinct once the first instance was fixed, or should the second and third have been cut?
3. Now that publications link somewhere, has anyone confirmed a Japanese reader lands on something legible at the other end of a Chemical Engineering Transactions DOI — or is "linked" being treated as equivalent to "verified"?
