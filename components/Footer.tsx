import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { footer, nav, site } from "@/data/content";
import Icon from "@/components/ui/Icon";
import Monogram from "@/components/ui/Monogram";
import styles from "./Footer.module.css";

/** The end of the page. */
const Footer: FC = () => {
  const { lang } = useLanguage();
  const other = lang === "en" ? "ja" : "en";

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.id}>
          <Monogram size={40} />
          <div>
            <p className={styles.name}>{site.name[lang]}</p>
            <p className={styles.alt} lang={other}>
              {site.name[other]}
            </p>
          </div>
        </div>

        <a href="#top" className={styles.top}>
          {nav.top[lang]}
          <Icon dir="up" size={18} />
        </a>

        <p className={styles.legal}>
          {footer.legal[lang]}
          <a href={site.url}>{site.urlLabel}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
