import { FC, ReactNode } from "react";
import styles from "./ui.module.css";

const Tag: FC<{ children: ReactNode }> = ({ children }) => (
  <span className={styles.tag}>{children}</span>
);

export default Tag;
