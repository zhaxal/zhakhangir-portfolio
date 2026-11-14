import { FC, useEffect, useRef, useState } from "react";
import { LANGS, LANG_LABELS, useLanguage } from "@/contexts/language-context";
import { a11y, nav, site, stops } from "@/data/content";
import Icon from "@/components/ui/Icon";
import Monogram from "@/components/ui/Monogram";
import styles from "./Header.module.css";

/** Anchor ids in page order; index 0 is the top. */
const IDS = ["top", ...stops.map((stop) => stop.id)];
const LAST = IDS.length - 1;

/** A thousand pixels of page is a kilometre of road. */
const kilometres = (px: number) => `${(Math.max(0, px) / 1000).toFixed(1)} km`;

/**
 * The header is a distance sign that travels with the driver: every place
 * ahead with the kilometres left to it, counted from real scroll position.
 * On narrow screens it shrinks to the next place and its distance, and the
 * full sign opens from the menu.
 */
const Header: FC = () => {
  const { lang, setLang } = useLanguage();
  /** Index into IDS of the next section ahead; past LAST means the end. */
  const [ahead, setAhead] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const kmRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const panelKmRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const aheadKmRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    let here = -1;
    let next = -2;

    const measure = () => {
      frame = 0;
      const bar = barRef.current?.offsetHeight ?? 56;
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Where each place starts. 14px of lead, so an anchor jump (which stops
      // 12px short of the bar) counts as having arrived. Capped at the end of
      // the page so the last place is always reachable.
      const tops = IDS.map((id, i) => {
        if (i === 0) return 0;
        const node = document.getElementById(id);
        if (!node) return Number.POSITIVE_INFINITY;
        // A place may sit under something else that is stuck to the top (the
        // lane gantry); its own scroll margin says how much.
        const under =
          parseFloat(window.getComputedStyle(node).scrollMarginTop) || 0;
        const top = node.getBoundingClientRect().top + y - bar - 14 - under;
        // On a page that cannot scroll nothing has been passed yet.
        return maxScroll > 0 ? Math.min(top, maxScroll) : top;
      });

      // The distance sign. Written straight to the nodes: it changes on every
      // scroll frame, and re-rendering for it would be wasted work.
      const write = (nodes: (HTMLSpanElement | null)[]) =>
        nodes.forEach((node, i) => {
          if (!node) return;
          const left = tops[i + 1] - y;
          const passed = left <= 0.5;
          node.textContent = passed ? "0 km" : kilometres(left);
          node.dataset.passed = String(passed);
        });
      write(kmRefs.current);
      write(panelKmRefs.current);

      const nextAhead = tops.findIndex((top, i) => i > 0 && top - y > 0.5);
      if (aheadKmRef.current) {
        aheadKmRef.current.textContent =
          nextAhead === -1 ? "" : kilometres(tops[nextAhead] - y);
      }
      if (nextAhead !== next) {
        next = nextAhead;
        setAhead(nextAhead === -1 ? LAST + 1 : nextAhead);
      }

      // Every place is addressable: the URL follows the driver. Where two
      // places start together (the two routes, side by side) the first one
      // names the spot. Skipped on the first measure, so an inbound hash is
      // left alone.
      let at = 0;
      for (let i = 0; i < tops.length; i += 1) {
        if (y >= tops[i] - 0.5) at = i;
      }
      if (maxScroll <= 0) at = 0;
      const spot = tops.indexOf(tops[at]);
      if (spot !== here) {
        if (here !== -1) {
          const hash = spot === 0 ? "" : `#${IDS[spot]}`;
          if (window.location.hash !== hash) {
            window.history.replaceState(
              window.history.state,
              "",
              `${window.location.pathname}${window.location.search}${hash}`
            );
          }
        }
        here = spot;
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Web fonts and images move the places once they land.
    document.fonts?.ready.then(onScroll).catch(() => {});
    window.addEventListener("load", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [lang]);

  // Lock the page behind the open panel, and close it on Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const arrived = ahead > LAST;
  const nextStop = stops[Math.min(ahead, LAST) - 1];
  const gateIndex = stops.length - 1;

  return (
    <>
      <a href="#main" className={styles.skip}>
        {a11y.skipToContent[lang]}
      </a>

      <header ref={barRef} className={styles.bar}>
        <a href="#top" className={styles.home} aria-label={nav.top[lang]}>
          <Monogram size={30} />
          <span className={styles.homeName}>{site.name[lang]}</span>
        </a>

        {/* Wide screens: every place ahead and how far it is. */}
        <nav className={styles.signs} aria-label={nav.sections[lang]}>
          {stops.slice(0, -1).map((stop, i) => (
            <a key={stop.id} href={`#${stop.id}`} className={styles.dest}>
              <span className={styles.destName}>{stop.name[lang]}</span>
              <span
                ref={(node) => {
                  kmRefs.current[i] = node;
                }}
                className={styles.km}
              />
            </a>
          ))}
        </nav>

        {/* Narrow screens: the next place and how far it is. */}
        <a
          href={`#${nextStop.id}`}
          className={styles.ahead}
          onClick={() => setMenuOpen(false)}
        >
          {!arrived && (
            <span className={styles.aheadLabel}>{nav.next[lang]}</span>
          )}
          <Icon name="sign" dir="down" size={14} />
          <span className={styles.aheadName}>{nextStop.name[lang]}</span>
          <span ref={aheadKmRef} className={styles.aheadKm} />
        </a>

        <a href="#contact" className={styles.gate}>
          {nav.contact[lang]}
          <span
            ref={(node) => {
              kmRefs.current[gateIndex] = node;
            }}
            className={styles.km}
          />
        </a>

        <div className={styles.langs} role="group" aria-label={nav.language[lang]}>
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
              className={styles.lang}
            >
              {LANG_LABELS[code]}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? nav.close[lang] : nav.menu[lang]}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((open) => !open)}
          className={styles.menuBtn}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={24} />
        </button>
      </header>

      <nav
        id="menu"
        className={`${styles.panel} ${menuOpen ? styles.open : ""}`}
        aria-label={nav.sections[lang]}
      >
        {/* The full distance sign: place on the left, kilometres on the right. */}
        <ol className={`sign ${styles.distance}`}>
          {stops.map((stop, i) => (
            <li key={stop.id}>
              <a href={`#${stop.id}`} onClick={() => setMenuOpen(false)}>
                <span>{stop.name[lang]}</span>
                <span
                  ref={(node) => {
                    panelKmRefs.current[i] = node;
                  }}
                  className={styles.km}
                />
              </a>
            </li>
          ))}
        </ol>
        <a
          href={`mailto:${site.email}`}
          className={styles.panelMail}
          onClick={() => setMenuOpen(false)}
        >
          {site.email}
        </a>
      </nav>
    </>
  );
};

export default Header;
