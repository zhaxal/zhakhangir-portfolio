import { FC } from "react";
import { useLanguage } from "@/contexts/language-context";
import { a11y, LaneId, lanes, nav, projects, work } from "@/data/content";
import Icon from "@/components/ui/Icon";
import Exit from "./Exit";
import styles from "./Junction.module.css";

const LANE_IDS: LaneId[] = ["work", "projects"];

/**
 * The junction: the road splits into two lanes that run side by side, Work
 * on the left and Projects on the right, with a hatched median between them,
 * so each role sits next to the work it produced. A gantry with one sign per
 * lane stays overhead while the reader is between them; on narrow screens
 * the lanes follow one another and the gantry jumps between them.
 */
const Junction: FC = () => {
  const { lang } = useLanguage();
  const other = lang === "en" ? "ja" : "en";
  const { mossport, apartx } = work;
  const { sites, thesis } = projects;

  const head = (id: LaneId) => (
    <header className={styles.pavement}>
      <h2 className={`paint ${styles.lanePaint}`}>{lanes[id].name[lang]}</h2>
      <p className={styles.laneOther} lang={other}>
        {lanes[id].name[other]}
      </p>
      <p className={styles.laneLead}>{lanes[id].lead[lang]}</p>
    </header>
  );

  return (
    <div className={styles.junction}>
      <div className={`wrap ${styles.road}`}>
        <div className={styles.gore} aria-hidden="true" />

        <nav className={styles.gantry} aria-label={nav.lanes[lang]}>
          {LANE_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.laneSign} ${styles[id]}`}
            >
              <span className={styles.swatch} />
              {lanes[id].name[lang]}
              <Icon name="sign" dir="down" size={18} />
            </a>
          ))}
        </nav>

        <div className={styles.median} aria-hidden="true" />

        {/* ---- Work ---- */}
        <section id="work" className={`${styles.lane} ${styles.work}`}>
          <span id="experience" className="anchor" />
          {head("work")}

          <Exit
            id={mossport.id}
            lane="work"
            year={mossport.year}
            name={mossport.name}
            meta={mossport.meta}
            lead={mossport.lead}
            facts={mossport.facts}
            proof={{ href: `#${sites.id}`, label: mossport.proof }}
            stops={mossport.stops}
          />

          <Exit
            id={apartx.id}
            lane="work"
            year={apartx.year}
            name={apartx.name}
            meta={apartx.meta}
            lead={apartx.lead}
            link={{ href: apartx.href, label: apartx.hrefLabel }}
            stops={apartx.stops}
          />
        </section>

        {/* ---- Projects ---- */}
        <section id="projects" className={`${styles.lane} ${styles.projects}`}>
          {head("projects")}

          <Exit
            id={sites.id}
            lane="projects"
            year={sites.year}
            name={sites.name}
            meta={sites.meta}
          >
            <p className={styles.note}>{sites.note[lang]}</p>
            <ul className={styles.billboards}>
              {sites.cards.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.billboard}
                  >
                    <span className={styles.shot}>
                      <img
                        src={site.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className={styles.siteName}>{site.name[lang]}</span>
                    <span className={styles.years}>
                      {site.years}
                      <Icon dir="out" size={14} />
                    </span>
                    <span className="visuallyHidden">
                      {" "}
                      ({a11y.external[lang]})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Exit>

          <Exit
            id={thesis.id}
            lane="projects"
            year={thesis.year}
            name={thesis.name}
            meta={thesis.meta}
            lead={thesis.lead}
          />
        </section>

        <div className={styles.merge} aria-hidden="true" />
      </div>
    </div>
  );
};

export default Junction;
