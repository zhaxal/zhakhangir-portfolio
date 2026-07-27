import { useEffect, useRef, useState } from "react";

/**
 * One-way scroll reveal. Returns a ref to attach to the element and whether it
 * has entered the viewport yet. Styling lives in globals.css on
 * `[data-reveal]` / `[data-revealed]`.
 *
 * Safety net: anything still hidden after 900ms that is already above the fold
 * is forced open, so a missed observer callback can never swallow content.
 */
export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);

    const timer = window.setTimeout(() => {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        setRevealed(true);
        observer.unobserve(node);
      }
    }, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return { ref, revealed };
};
