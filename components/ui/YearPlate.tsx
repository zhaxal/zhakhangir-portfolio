import { FC } from "react";
import { LaneId } from "@/data/content";
import styles from "./ui.module.css";

/**
 * The number plate on an entry's sign: its start year, in the lane's colour,
 * inside a white inset border.
 */
const YearPlate: FC<{ lane: LaneId; year: string }> = ({ lane, year }) => (
  <span className={`${styles.plate} ${styles[lane]}`} aria-hidden="true">
    {year}
  </span>
);

export default YearPlate;
