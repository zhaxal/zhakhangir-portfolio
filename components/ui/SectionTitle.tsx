import { FC } from "react";
import Reveal from "./Reveal";
import styles from "./ui.module.css";

interface SectionTitleProps {
  /** One entry per line. Line 1 slides in from the left, line 2 from the right. */
  lines: string[];
}

/** Split reveal: line 1 from the left, every following line from the right at +120ms. */
const SectionTitle: FC<SectionTitleProps> = ({ lines }) => (
  // Each line is its own block element so it can reveal independently, which
  // leaves no whitespace between them — a screen reader would otherwise read
  // "Papers &Presentations". The label restores the word break.
  <h2 className={styles.sectionTitle} aria-label={lines.join(" ")}>
    {lines.map((line, i) => (
      <Reveal
        key={line}
        as="span"
        mode={i === 0 ? "left" : "right"}
        delay={i === 0 ? 0 : 120}
      >
        {line}
      </Reveal>
    ))}
  </h2>
);

export default SectionTitle;
