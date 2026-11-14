import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { hero, LaneId, lanes, site } from "@/data/content";
import Icon from "@/components/ui/Icon";
import styles from "./Approach.module.css";

const LANE_IDS: LaneId[] = ["work", "projects"];

/**
 * The approach: one wide road before it splits. The name is painted on the
 * asphalt in road lettering; beside it stand the roadside signs: what this
 * person does and where the two lanes lead, availability, and contact.
 */
const Approach: FC = () => {
  const { lang } = useLanguage();
  const other = lang === "en" ? "ja" : "en";
  const [first, second] = site.nameLines[lang];

  return (
    <section id="top" className={styles.approach}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.lettering}>
          <h1 className={styles.name}>
            <span className={`paint ${styles.line}`}>{first}</span>{" "}
            <span className={`paint ${styles.line}`}>{second}</span>
          </h1>
          <p className={styles.plates}>
            <span className="aux" lang={other}>
              {site.name[other]}
            </span>
            <span className="aux">{site.role[lang]}</span>
          </p>
        </div>

        <div className={styles.roadside}>
          <div className={`sign ${styles.guide}`}>
            <p className={styles.intro}>{hero.intro[lang]}</p>
            <ul className={styles.routes}>
              {LANE_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span className={`${styles.swatch} ${styles[id]}`} />
                    <span className={styles.routeName}>{lanes[id].name[lang]}</span>
                    <Icon name="sign" dir="down" size={26} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.led}>
            <p className={styles.ledTitle}>{hero.notice.title[lang]}</p>
            <ul>
              {hero.notice.rows.map((row) => (
                <li key={row.type.en}>
                  <span className={styles.ledDim}>{row.type[lang]}</span>
                  <span>{row.text[lang]}</span>
                  <span className={styles.ledOpen}>{row.status[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact" className={`sign signGate ${styles.gate}`}>
            <span className={styles.gateLabel}>{hero.contact[lang]}</span>
            <Icon name="sign" dir="down" size={30} className={styles.gateArrow} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Approach;
