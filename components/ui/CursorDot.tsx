import { FC, useEffect, useRef, useState } from "react";
import styles from "./CursorDot.module.css";

/**
 * Decorative two-part cursor: a difference-blended ring that grows over
 * interactive elements, plus a red core. Never mounted on touch pointers or
 * under prefers-reduced-motion.
 */
const CursorDot: FC = () => {
  const [mounted, setMounted] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMounted(!coarse && !calm);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let hot = false;
    let lastTarget: Element | null = null;

    const paint = () => {
      frame = 0;
      const shift = `translate3d(${x}px, ${y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = shift;
      if (coreRef.current) coreRef.current.style.transform = shift;
      ringRef.current?.classList.toggle(styles.hot, hot);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      // `closest` is the expensive part, so only re-run it when the pointer has
      // actually crossed onto a different element.
      const target = event.target as Element | null;
      if (target !== lastTarget) {
        lastTarget = target;
        hot = Boolean(target?.closest?.("a, button, [role='button']"));
      }

      // Coalesce to one write per frame; pointermove can fire far faster.
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true">
        <span className={styles.ringInner} />
      </div>
      <div ref={coreRef} className={styles.core} aria-hidden="true" />
    </>
  );
};

export default CursorDot;
