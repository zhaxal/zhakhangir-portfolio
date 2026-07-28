import { FC, useEffect, useRef, useState } from "react";
import {
  LANGS,
  LANG_LABELS,
  useLanguage,
} from "@/contexts/language-context";
import { a11y, nav, site } from "@/data/content";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    // The progress bar updates every scroll tick, so it is written straight to
    // the element instead of through state — re-rendering the whole header at
    // scroll frequency is wasted work. `scrolled` stays in state: it flips once.
    const measure = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progressRef.current?.style.setProperty("width", `${progress}%`);

      // Measure the hero, not the viewport. The hero is `min-height: 100dvh`
      // so the two usually agree, but the hero can still grow past one screen
      // if its content needs more room (e.g. a short landscape phone) — measuring
      // the element rather than assuming viewport height keeps the header
      // switching to its scrolled state exactly when the hero actually ends.
      const hero = document.getElementById("top");
      const heroHeight = hero?.offsetHeight ?? window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.82);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

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

  const links = [
    { href: "#work", label: nav.work[lang] },
    { href: "#experience", label: nav.experience[lang] },
  ];

  return (
    <>
      <a href="#main" className={styles.skip}>
        {a11y.skipToContent[lang]}
      </a>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div ref={progressRef} className={styles.progress} />

        <a href="#top" className={styles.wordmark}>
          {site.wordmark[lang]}
        </a>

        <nav className={styles.nav}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.langs}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                data-tap="v"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={`${styles.lang} ${
                  lang === code ? styles.active : ""
                }`}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="sm"
            dot
            data-tap
            className={styles.cta}
          >
            {nav.cta[lang]}
          </Button>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={`${styles.panel} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        {[...links, { href: "#contact", label: nav.contact[lang] }].map(
          (link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? undefined : -1}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          )
        )}
        <a
          href={`mailto:${site.email}`}
          className={styles.panelMail}
          data-tap
          tabIndex={menuOpen ? undefined : -1}
          onClick={() => setMenuOpen(false)}
        >
          {site.email.toUpperCase()}
        </a>
      </nav>
    </>
  );
};

export default Header;
