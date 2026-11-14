import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { a11y, record } from "@/data/content";
import Icon from "@/components/ui/Icon";
import styles from "./Background.module.css";

/** Education, papers and tools, on three boards under one sign. */
const Background: FC = () => {
  const { lang } = useLanguage();
  const other = lang === "en" ? "ja" : "en";

  return (
    <section id="record" className={styles.area}>
      <div className={`wrap ${styles.grid}`}>
        <header className={`sign ${styles.head}`}>
          <h2 className={styles.title}>{record.title[lang]}</h2>
          <p className={styles.other} lang={other}>
            {record.title[other]}
          </p>
        </header>

        <div className={`board ${styles.panel}`}>
          <h3 className={styles.panelTitle}>{record.educationTitle[lang]}</h3>
          <ul className={styles.rows}>
            {record.education.map((school) => (
              <li key={school.href}>
                <a
                  href={school.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.row}
                >
                  <span className={styles.year}>{school.period}</span>
                  <span>
                    <span className={styles.rowTitle}>{school.name[lang]}</span>
                    <span className={styles.rowNote}>
                      {school.degree[lang]} · {school.status[lang]}
                    </span>
                  </span>
                  <Icon dir="out" size={18} className={styles.rowArrow} />
                  <span className="visuallyHidden">
                    {" "}
                    ({a11y.external[lang]})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`board ${styles.panel}`}>
          <h3 className={styles.panelTitle}>{record.papersTitle[lang]}</h3>
          <ol className={styles.rows}>
            {record.papers.map((paper) => (
              <li key={paper.href}>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.row} ${styles.short}`}
                >
                  <span className={styles.year}>{paper.year}</span>
                  <span>
                    <span className={styles.rowTitle}>{paper.title[lang]}</span>
                    <span className={styles.rowNote}>{paper.venue[lang]}</span>
                  </span>
                  <Icon dir="out" size={18} className={styles.rowArrow} />
                  <span className="visuallyHidden">
                    {" "}
                    ({a11y.external[lang]})
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className={`board ${styles.panel} ${styles.wide}`}>
          <h3 className={styles.panelTitle}>{record.toolsTitle[lang]}</h3>
          <ul className={styles.tools}>
            {record.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Background;
