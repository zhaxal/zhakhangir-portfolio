import { CSSProperties, FC } from "react";
import styles from "./ui.module.css";

/** The site's mark: the initials set like an expressway route shield. */
const Monogram: FC<{ size?: number }> = ({ size = 36 }) => (
  <span
    className={styles.shield}
    style={{ "--size": `${size}px` } as CSSProperties}
    aria-hidden="true"
  >
    ZA
  </span>
);

export default Monogram;
