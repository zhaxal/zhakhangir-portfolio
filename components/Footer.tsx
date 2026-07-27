import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { footer, nav, site } from "@/data/content";
import Glyph from "@/components/ui/Glyph";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  const { lang } = useLanguage();

  const pageLinks = [
    { href: "#work", label: nav.work[lang] },
    { href: "#experience", label: nav.experience[lang] },
    { href: "#contact", label: nav.contact[lang] },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.mailto}>
        <a href={`mailto:${site.email}`} data-tap>
          {site.email.toUpperCase()}
        </a>
      </div>

      {/* The social links live in the Contact section, next to the availability
          line and the form — repeating them here put the same three links twice
          within ~700px on a phone. */}
      <div className={styles.cols}>
        <ul className={styles.list}>
          {pageLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} data-tap>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.meta}>
          <p className={styles.location}>{footer.location[lang]}</p>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.url}
            data-tap
          >
            {site.urlLabel} <Glyph />
          </a>
        </div>
      </div>

      <div className={styles.legal}>
        <span>
          <span className={styles.mark}>©</span> {footer.legal[lang]}
        </span>
      </div>

      <div className={styles.strip} />
    </footer>
  );
};

export default Footer;
