# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — recruiters and hiring managers at Japanese companies.** They open this after a résumé or a LinkedIn profile, usually for well under a minute, often on a phone, to answer one question: is this person worth an interview. Some read Japanese, some read English; neither group is the fallback.

**Secondary — prospective freelance clients.** People deciding whether to hire Zhakhangir for project work the way Moscow Sport did. They are looking for proof he can own a whole delivery, not a code sample.

**Tertiary — anyone who arrives from a link he sent.** Conference contacts, former colleagues, professors. The site doubles as his durable, self-owned presence, so it must stay current and correct even when no one is hiring.

Not a primary audience: academic reviewers. Publications are supporting evidence here, not the point of the site.

## Product Purpose

A personal portfolio for Zhakhangir Anuarbek — a single-page, bilingual (EN / 日本語) site at `portfolio.zhakhangir.site` that presents his engineering work and gives a reader one way to reach him.

Success is a reply: an interview request, a freelance enquiry, or a message through the contact form. Failure is a reader who closes the tab still unsure what he actually does.

## Positioning

**He has shipped production web platforms at real scale *and* run computer-vision models on hardware he assembled.** Most engineers can claim one side. The evidence for both is concrete and independently checkable:

- Web at scale: 10+ event platforms for Moscow Sport, 5,000+ users, owning backend, frontend and deployment. Nine of the sites are live and linkable.
- On-device vision: stereo-depth estimation at 2.4 cm mean error and a YOLOv8n ripeness classifier at 12–15 FPS on a ~$410 OAK-D Lite + Raspberry Pi 4 stack with no external accelerator, validated in a live greenhouse trial; plus a battery-powered Hailo-NPU camera at Looq that measures visitor attention on-device.

Any future work that obscures either half weakens the only claim a neighboring portfolio could not truthfully copy.

## Operating Context

- Read in short bursts, frequently on a phone, by someone with several tabs open comparing candidates.
- Reached from a résumé link, a LinkedIn profile, or a message he sent directly — rarely from search.
- Japanese-market hiring, where a Japanese-language version is a signal of intent to stay, not a translation nicety.
- Maintained by one person alongside a full-time master's program and an internship. It has to survive months of neglect without breaking or going stale.

## Capabilities and Constraints

**Confirmed functionality**
- Single scrolling page with in-page anchors (`#top`, `#work`, `#experience`, `#contact`). `/projects` and `/experience` are redirect stubs kept alive for old inbound links.
- Client-side EN/JA switch. English is pre-rendered for hydration safety; on the client a stored choice (`localStorage: portfolio-lang`) wins, else `navigator.language` decides. The active locale sets `document.documentElement.lang`.
- Contact form posting to the Firestore `messages` collection (`{ email, text }`), with client-side validation and an inline status line.

**Technical constraints**
- Next.js 13 pages router with `output: "export"` — fully static. No API routes, no server rendering, no `next/image` optimization. Any new capability must work as static files plus client JS or a third-party endpoint.
- Deployed to Firebase Hosting (project `zhaxal-portfolio`) by GitHub Actions on merge to `main`; PRs get preview channels.
- `secret/firebaseConfig.ts` is gitignored, so a fresh clone cannot build without it.
- All user-facing strings live in `data/content.ts` as `Record<"en"|"ja", string>` and render through `useLanguage()`. Adding copy means adding both locales.
- Content is static and hand-maintained. There is no CMS and no build-time data fetch.

**Explicitly undecided**
- Firestore security rules and any spam protection on the contact form are not defined in this repo. Unknown, not confirmed-absent — check before treating the endpoint as hardened.
- No analytics of any kind is currently installed. Whether he wants any is undecided.
- No custom 404 design and no OG/social preview image.

## Brand Commitments

- Name and wordmark: **Zhakhangir Anuarbek** / `ZHAKHANGIR`.
- Contact identity: `anuarbek.z.b@gmail.com`, `portfolio.zhakhangir.site`, GitHub `zhaxal`, LinkedIn `zhakhangir`, Instagram `zhaxal`.
- Bilingual EN / 日本語 is an identity commitment, not a feature. Both locales are first-class; shipping English-only copy is a regression.
- **The "Novasite" design handoff (`Portfolio website redesign.zip`, July 2026) is the binding visual authority for this site.** Recorded here as a constraint only — the visual system itself is not product truth and belongs in DESIGN.md.

## Evidence on Hand

**Real, in-repo.** Two locations, deliberately: `public/` is what deploys and holds only display-optimised copies; `evidence/` is kept in the repo but excluded from the build, holding full-resolution originals and material the site does not currently show.

- Nine live Moscow Sport event sites with screenshots — `public/projects/{rogaine,ski,zabeg,pryzki,led,interesnaya,cross,techfest,gto}.*` — each with a working public URL. Full-resolution originals of the two largest are in `evidence/projects/`.
- Device photography: `public/hero.jpg`, `public/projects/greenhouse-device.jpg`, `public/projects/looq-camera.jpg`. All his own photos; no stock. Uncropped originals in `evidence/projects/`.
- Master's thesis writeup and media — `evidence/projects/thesis-masters/` (includes `demo.mp4`, H.264/AAC, and `detections.png` showing real on-device bounding boxes with depth).
- Bachelor's thesis writeup and dashboards — `evidence/projects/thesis-bachelor/`.
- Looq notes — `evidence/projects/looq-work/looq_work.md`.

**Real, off-site:** two papers in *Chemical Engineering Transactions* vol. 103 (2023); poster at XX CIGR World Congress, Kyoto (2022); booth presenter at IVS 2026 Kyoto for looq.jp. **Outstanding:** none of the four carries a URL on the page yet. `PublicationRow.href` exists and a row only becomes a link — and only then performs the hover inversion — once one is supplied. The two CET papers have DOIs; the IVS and CIGR entries have event pages.

**Absences future work must not fabricate:** there are no testimonials, no client quotes, no press coverage, no user-satisfaction or revenue figures, and no permission on record to display client logos. The measured numbers that exist (5,000+ users, 10+ apps, 2.4 cm, 12–15 FPS, mAP@0.5 = 0.791, ~$410) are the complete set — do not invent neighbors for them. A replacement for the removed tenth Moscow Sport card (VDNH) is still outstanding; `evidence/projects/vdnh.jpg` is held for it.

## Product Principles

1. **Both halves, always legible.** The web-at-scale record and the on-device vision work must both land in a single pass. Any change that lets one disappear costs the positioning.
2. **Evidence, not adjectives.** Every claim traces to a live URL, a screenshot, a paper, or a measured number. If it can't be checked, it doesn't ship.
3. **Both locales are first-class.** Japanese is not a translation layer over an English site. Copy that exists in only one language is unfinished.
4. **Built to be neglected.** Static output, free-tier hosting, deploy on merge, nothing to babysit. It must still be correct after six silent months.
5. **Ninety seconds is the budget.** The reader is comparing candidates with tabs open. Reading order and immediacy outrank completeness.
