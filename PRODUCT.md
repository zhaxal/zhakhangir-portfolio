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

**A full-stack web engineer who owns a product end to end: front end, back end, database, deployment and live support.** The owner is targeting full-stack roles, not machine-learning roles (stated 14 November 2026), so the site is about web work.

- The evidence: 10+ event platforms for ANO Mossport (Moscow Sport), 5,000+ people registered, events of up to 1,000 attendees, a move from Firestore to PostgreSQL, CI/CD on his own servers, and growing the work from solo to a two-person team. Nine of the sites are live and linkable. Then ApartX, a short-term rental platform.
- The master's thesis (the vision system for a tomato-harvesting robot, joint research with Hitachi) appears once, as a brief project entry with no figures. It is not a second headline.
- Looq is not mentioned anywhere on the site. Do not reintroduce it.

## Operating Context

- Read in short bursts, frequently on a phone, by someone with several tabs open comparing candidates.
- Reached from a résumé link, a LinkedIn profile, or a message he sent directly — rarely from search.
- Japanese-market hiring, where a Japanese-language version is a signal of intent to stay, not a translation nicety.
- Maintained by one person in spare time. It has to survive months of neglect without breaking or going stale.

## Capabilities and Constraints

**Confirmed functionality**
- Single scrolling page with in-page anchors (`#top`, `#work`, `#projects`, `#record`, `#contact`, plus one per entry: `#mossport`, `#apartx`, `#sites`, `#thesis`). On wide screens `#work` and `#projects` sit side by side. The URL hash follows the section in view. The old anchor `#experience` still resolves, and `/projects` and `/experience` are redirect stubs kept alive for old inbound links.
- Client-side EN/JA switch. English is pre-rendered for hydration safety; on the client a stored choice (`localStorage: portfolio-lang`) wins, else `navigator.language` decides. The active locale sets `document.documentElement.lang`.
- Contact form posting to the Firestore `messages` collection (`{ email, text }`), with client-side validation and an inline status line.

**Technical constraints**
- Next.js 13 pages router with `output: "export"` — fully static. No API routes, no server rendering, no `next/image` optimization. Any new capability must work as static files plus client JS or a third-party endpoint.
- Deployed to Firebase Hosting (project `zhaxal-portfolio`) by GitHub Actions on merge to `main`; PRs get preview channels.
- `secret/firebaseConfig.ts` is gitignored, so a fresh clone cannot build without it.
- All user-facing strings live in `data/content.ts` as `Record<"en"|"ja", string>` and render through `useLanguage()`. Adding copy means adding both locales. The Japanese names of the nine Moscow event sites are working translations, not official names.
- Content is static and hand-maintained. There is no CMS and no build-time data fetch.

**Explicitly undecided**
- Firestore security rules and any spam protection on the contact form are not defined in this repo. Unknown, not confirmed-absent — check before treating the endpoint as hardened.
- No analytics of any kind is currently installed. Whether he wants any is undecided.
- No custom 404 design and no OG/social preview image.

## Brand Commitments

- Name and wordmark: **Zhakhangir Anuarbek** / `ZHAKHANGIR`.
- Contact identity: `anuarbek.z.b@gmail.com`, `portfolio.zhakhangir.site`, GitHub `zhaxal`, LinkedIn `zhakhangir`, Instagram `zhaxal`.
- Bilingual EN / 日本語 is an identity commitment, not a feature. Both locales are first-class; shipping English-only copy is a regression.
- Tone: plain and professional. The owner called themed copy "corny" and "silly" and asked for it to be removed (14 November 2026).
- **The CV is the source of truth for work history.** As of November 2026 it lists two roles (ANO Mossport, ApartX), one project (the Niigata University and Hitachi thesis) and both degrees as graduated. Where the site and the CV disagree on those, the CV wins.
- The "Novasite" design handoff (`Portfolio website redesign.zip`, July 2026) was the visual authority until the November 2026 ground-up redesign and is no longer binding. The visual system is not product truth and belongs in DESIGN.md.
- No phone number is published on the site, although the CV carries one.

## Evidence on Hand

**Real, in-repo.** Two locations, deliberately: `public/` is what deploys and holds only display-optimised copies; `evidence/` is kept in the repo but excluded from the build, holding full-resolution originals and material the site does not currently show.

- Nine live Moscow Sport event sites with screenshots — `public/projects/{rogaine,ski,zabeg,pryzki,led,interesnaya,cross,techfest,gto}.*` — each with a working public URL. Full-resolution originals of the two largest are in `evidence/projects/`.
- Photography: `public/portrait.jpg` (cropped from `evidence/projects/hero.jpg`), his own photo. `public/projects/greenhouse-device.jpg` is no longer shown on the page. Uncropped originals in `evidence/projects/`.
- Master's thesis writeup and media — `evidence/projects/thesis-masters/` (demo video, detection frames). None of it is shown on the page now; `public/projects/thesis/demo.mp4` is still in `public/` but unreferenced.
- Bachelor's thesis writeup and dashboards — `evidence/projects/thesis-bachelor/`.
- Looq notes — `evidence/projects/looq-work/looq_work.md`. Kept as private evidence only; nothing about Looq ships.

**Real, off-site:** two papers in *Chemical Engineering Transactions* vol. 103 (2023) and a poster at XX CIGR World Congress, Kyoto (2022). All three link out from the page: the papers to their DOIs, CIGR to its event page.

**On the site but not on the CV:** the three papers and presentations. **Removed from the site at the owner's request:** Looq (internship, camera, the IVS 2026 booth), the thesis's measured numbers and media, and the R&D role at D. Serikbayev EKTU (2021–2023, not on the CV).

**Absences future work must not fabricate:** there are no testimonials, no client quotes, no press coverage, no user-satisfaction or revenue figures, and no permission on record to display client logos. The figures on the page (5,000+ people registered, 10+ applications, events of up to 1,000 attendees, a two-person team) are the complete set — do not invent neighbors for them. A replacement for the removed tenth Moscow Sport card (VDNH) is still outstanding; `evidence/projects/vdnh.jpg` is held for it.

## Product Principles

1. **Web work first.** The roles and the live sites they produced must land in a single pass. Research and anything machine-learning stays brief and secondary.
2. **Evidence, not adjectives.** Every claim traces to a live URL, a screenshot, a paper, or a measured number. If it can't be checked, it doesn't ship.
3. **Both locales are first-class.** Japanese is not a translation layer over an English site. Copy that exists in only one language is unfinished.
4. **Built to be neglected.** Static output, free-tier hosting, deploy on merge, nothing to babysit. It must still be correct after six silent months.
5. **Ninety seconds is the budget.** The reader is comparing candidates with tabs open. Reading order and immediacy outrank completeness.
6. **Plain words.** The copy is serious and professional. The road theme lives in the visuals; no puns, slogans or themed labels.
