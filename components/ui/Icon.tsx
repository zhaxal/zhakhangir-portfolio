import { FC } from "react";

type IconName = "arrow" | "sign" | "menu" | "close" | "alert";
type Direction = "right" | "left" | "down" | "up" | "out";

const TURN: Record<Direction, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: -90,
  out: -45,
};

interface IconProps {
  name?: IconName;
  /** Arrows only: where the arrow points. `out` is the exit arrow. */
  dir?: Direction;
  size?: number;
  className?: string;
}

/**
 * The sign system's pictograms. `arrow` is the small stroke arrow for
 * controls; `sign` is the solid arrow painted on a guide sign.
 * Always decorative; the control's text carries the meaning.
 */
const Icon: FC<IconProps> = ({ name = "arrow", dir = "right", size = 20, className }) => {
  const turns = (name === "arrow" || name === "sign") && dir !== "right";
  const solid = name === "sign";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth="2.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      style={
        turns
          ? { rotate: `${TURN[dir]}deg`, flex: "none" }
          : { flex: "none" }
      }
    >
      {name === "arrow" && <path d="M4 12h15M12.5 5.5 19 12l-6.5 6.5" />}
      {name === "sign" && <path d="M2 9.5h10V4l10 8-10 8v-5.5H2z" />}
      {name === "menu" && <path d="M4 6.5h16M4 12h16M4 17.5h16" />}
      {name === "close" && <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />}
      {name === "alert" && <path d="M12 4.5 21 20H3L12 4.5ZM12 10v4.5M12 17v.4" />}
    </svg>
  );
};

export default Icon;
