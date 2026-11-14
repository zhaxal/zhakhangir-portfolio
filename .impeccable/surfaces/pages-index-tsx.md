---
version: 1
slug: "pages-index-tsx"
primary_target: "pages/index.tsx"
related_targets: []
---

# Surface brief: home page

Scope: the whole single-page portfolio (`pages/index.tsx` and everything it renders). Visitor mode: Persuade.

- Audience and job: recruiters and hiring managers, many at Japanese companies, often on a phone, deciding in under ninety seconds whether to interview. Freelance clients second.
- Action: send a message from the contact section.
- Proof on hand: the CV (ANO Mossport, ApartX, the Niigata University and Hitachi thesis), nine live event sites, thesis media and measured numbers, the Looq camera, four papers and presentations.
- Constraints: static export, English and Japanese both first-class, Firestore contact form, no invented claims, no phone number on the page.
- Decided without the user (they asked to skip questions): direction taken from the roll, code-led build, CV is the source of truth for work history, Looq and papers kept as portfolio evidence the CV omits, the EKTU role dropped from work history.

## Direction contract

World pinned by the owner (Japanese expressway seen from above). On 14 November 2026, after the from-scratch rebuild, they asked for three changes: serious copy with nothing corny or silly, no mention of Looq, and no Vision route because they are not targeting machine-learning jobs; the thesis stays only as a brief project entry without figures.

THESIS: The page is a road seen from above, and roles and the work they produced run side by side as two lanes, Work and Projects. The theme is drawn, never written: every word says plainly what a thing is. Refuses stacked sections under a centred name, and themed or jokey copy.

OWN-WORLD: An expressway from above. Asphalt ground the whole way, solid white edge lines in the gutters, dashed white lane lines, zebra-hatched gore and median. Headings painted on the road in condensed lettering stretched along the direction of travel. Green guide signs with a white inset border for naming things, white boards for reading, small white auxiliary plates with a black rule. Lane colours: blue for Work, vermilion for Projects, as pavement blocks and year plates. Purple for contact. An amber LED board for availability. Flat colour, no gradients, no shadows.

STORY: The visitor reads the name painted on the road and the sign saying what this engineer does, sees the road split, reads the roles on the left with the live sites they produced on the right, checks education, papers and tools, and writes in.

FIRST VIEWPORT: Asphalt. Header bar with each section and the distance left to it, and the purple Contact control. Left seven columns: the name in two lines of road lettering with two auxiliary plates under it (the name in the other script, the role). Right five columns: a green sign with the one-sentence introduction and two rows leading to Work and Projects; the LED availability board; the purple Contact sign, the primary action. At the bottom the hatched gore appears and the gantry with the two lane signs.

FORM: Parallel carriageways, candidate 5 of 7 on the resonance-ordered structure list; seed key a95afa1b (world seed 89b2af6a); code-led. Signature interaction: the gantry with one sign per lane stays overhead for the whole length of the two lanes, and on phones it jumps between them; the header counts down the distance to every section from real scroll position. Motion grammar: paint is laid along the direction of travel (the name); arrows move along their own heading. Removed at the owner's request: the trip meter, the receipt, the barrier, the Vision route, all themed labels.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Whether the header's kilometre readout reads as playful or as useful; kept for now as part of the design the owner said they like.
- Whether a current location should be stated; the CV gives none, so the page states none.
