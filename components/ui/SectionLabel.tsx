import { FC, ReactNode } from "react";
import styles from "./ui.module.css";

interface SectionLabelProps {
  marker?: "degree" | "dot" | "none";
  children: ReactNode;
}

const glyphs = { degree: "°", dot: "•", none: "" };

const SectionLabel: FC<SectionLabelProps> = ({
  marker = "degree",
  children,
}) => (
  <div className={styles.sectionLabel}>
    {glyphs[marker] && <span aria-hidden="true">{glyphs[marker]}</span>}
    {children}
  </div>
);

export default SectionLabel;
