import { FC, ReactNode } from "react";
import { useLanguage } from "@/contexts/language-context";
import { a11y, Fact, LaneId, Localized } from "@/data/content";
import Icon from "@/components/ui/Icon";
import YearPlate from "@/components/ui/YearPlate";
import styles from "./Exit.module.css";

interface ExitProps {
  id: string;
  lane: LaneId;
  /** Start year, shown on the sign's number plate. */
  year: string;
  name: Localized;
  meta: Localized;
  lead?: Localized;
  /** The employer's or product's own site. */
  link?: { href: string; label: Localized };
  facts?: Fact[];
  /** In-page jump from the figures to the work that backs them. */
  proof?: { href: string; label: Localized };
  stops?: Localized[];
  /** Extra material inside the board. */
  children?: ReactNode;
}

/**
 * One entry on a lane: a green sign naming it, then a white board with the
 * account, the figures and the links.
 */
const Exit: FC<ExitProps> = ({
  id,
  lane,
  year,
  name,
  meta,
  lead,
  link,
  facts,
  proof,
  stops,
  children,
}) => {
  const { lang } = useLanguage();

  return (
    <article id={id} className={styles.exit}>
      <header className={`sign ${styles.exitSign}`}>
        <YearPlate lane={lane} year={year} />
        <div>
          <h3 className={styles.name}>{name[lang]}</h3>
          <p className={styles.meta}>{meta[lang]}</p>
        </div>
        <Icon name="sign" dir="out" size={28} className={styles.arrow} />
      </header>

      <div className={`board ${styles.body}`}>
        {lead && <p className={styles.lead}>{lead[lang]}</p>}

        {facts && (
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label.en} className={styles.fact}>
                <dt>{fact.label[lang]}</dt>
                <dd>{fact.value[lang]}</dd>
              </div>
            ))}
          </dl>
        )}

        {stops && (
          <ul className={styles.stops}>
            {stops.map((stop) => (
              <li key={stop.en}>{stop[lang]}</li>
            ))}
          </ul>
        )}

        {children}

        {(proof || link) && (
          <p className={styles.links}>
            {proof && (
              <a href={proof.href} className={styles.out}>
                {proof.label[lang]}
                <Icon size={18} />
              </a>
            )}
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.out}
              >
                {link.label[lang]}
                <Icon dir="out" size={18} />
                <span className="visuallyHidden"> ({a11y.external[lang]})</span>
              </a>
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default Exit;
