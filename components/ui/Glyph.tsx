import { FC } from "react";

/**
 * A decorative typographic glyph. Screen readers announce "↗" as "north east
 * arrow" — across the ~25 external links on this page that is pure noise, and
 * the link text already names the destination. Kept out of `data/content.ts`
 * so the copy stays readable and translatable.
 */
const Glyph: FC<{ char?: "↗" | "↓" }> = ({ char = "↗" }) => (
  <span aria-hidden="true">{char}</span>
);

export default Glyph;
