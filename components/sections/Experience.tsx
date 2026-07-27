import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { experience } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Glyph from "@/components/ui/Glyph";
import section from "./section.module.css";
import styles from "./Experience.module.css";

// Stagger between sibling rows, per the handoff's reveal timings.
const rowDelays = [0, 100, 200, 300];

const Experience: FC = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="experience"
      className={`${section.section} ${section.bordered}`}
    >
      <div className={section.inner}>
        <div className={section.head}>
          <SectionLabel>{experience.label[lang]}</SectionLabel>
          <SectionTitle lines={experience.title.map((line) => line[lang])} />
        </div>

        <div className={styles.rows}>
          {experience.rows.map((row, index) => (
            <Reveal
              key={row.company}
              delay={rowDelays[index] ?? 300}
              className={styles.row}
            >
              <span className={styles.period}>{row.period[lang]}</span>
              <div className={styles.rowBody}>
                <h3 className={styles.company}>
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tap
                  >
                    {row.company} <Glyph />
                  </a>
                </h3>
                <span className={styles.role}>{row.role[lang]}</span>
                <p className={styles.copy}>{row.body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.edu}>
          {experience.education.map((cell, index) => (
            <Reveal
              key={cell.href}
              delay={index * 100}
              className={styles.eduCell}
            >
              {index === 0 ? (
                <span className={styles.eduLabel}>
                  {experience.educationLabel[lang]}
                </span>
              ) : (
                <span
                  className={`${styles.eduLabel} ${styles.eduSpacer}`}
                  aria-hidden="true"
                >
                  &nbsp;
                </span>
              )}
              <h3 className={styles.eduName}>
                <a
                  href={cell.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tap
                >
                  {cell.name[lang]} <Glyph />
                </a>
              </h3>
              <span className={styles.eduSub}>{cell.subtitle[lang]}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
