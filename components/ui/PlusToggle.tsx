import { FC } from "react";
import styles from "./ui.module.css";

/**
 * The system's disclosure mark: two hairline rules forming a +, rotating into
 * an × when the control that owns it is expanded. Purely decorative — it reads
 * the `aria-expanded` of an ancestor, so the button carries the semantics.
 */
const PlusToggle: FC = () => <span className={styles.plus} aria-hidden="true" />;

export default PlusToggle;
