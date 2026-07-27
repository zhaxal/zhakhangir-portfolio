import { CSSProperties, ElementType, FC, ReactNode } from "react";
import { useReveal } from "@/hooks/reveal";

export type RevealMode = "rise" | "left" | "right" | "scale";

interface RevealProps {
  mode?: RevealMode;
  /** Stagger against the element's siblings, in ms. */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({
  mode = "rise",
  delay = 0,
  as: Tag = "div",
  className,
  style,
  children,
}) => {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={mode}
      data-revealed={revealed ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
