import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { publications } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Glyph from "@/components/ui/Glyph";
import section from "./section.module.css";
import styles from "./Publications.module.css";

const Publications: FC = () => {
  const { lang } = useLanguage();

  return (
    <section className={`${section.section} ${section.bordered}`}>
      <div className={section.inner}>
        <div className={`${section.head} ${section.headTight}`}>
          <SectionLabel>{publications.label[lang]}</SectionLabel>
          <SectionTitle lines={publications.title.map((line) => line[lang])} />
        </div>

        <Reveal className={styles.rows}>
          {publications.rows.map((row) => {
            const body = (
              <>
                <span className={styles.copy}>
                  <span className={styles.title}>
                    {row.title[lang]}
                    {row.href && (
                      <>
                        {" "}
                        <Glyph />
                      </>
                    )}
                  </span>
                  <span className={styles.desc}>{row.description[lang]}</span>
                </span>
                <span className={styles.year}>//{row.year}</span>
              </>
            );

            // Only a row that actually leads somewhere gets the invert.
            return row.href ? (
              <a
                key={row.title.en}
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.row} ${styles.rowLink}`}
                data-tap
              >
                {body}
              </a>
            ) : (
              <div key={row.title.en} className={styles.row}>
                {body}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Publications;
