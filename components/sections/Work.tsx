import { FC, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { work } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";
import Glyph from "@/components/ui/Glyph";
import PlusToggle from "@/components/ui/PlusToggle";
import styles from "./Work.module.css";

const Work: FC = () => {
  const { lang } = useLanguage();
  // The grid is bounded to one screenful until asked to open. Every card is
  // rendered; CSS hides the overflow so each breakpoint keeps complete rows.
  const [gridOpen, setGridOpen] = useState(false);
  const cardCount = work.moscowSport.cards.length;

  return (
    <section id="work" className={styles.section}>
      <div className={styles.head}>
        <SectionLabel>{work.label[lang]}</SectionLabel>
        <SectionTitle lines={[work.title[lang]]} />
      </div>

      {/* The plates lead: they carry the half of the positioning nothing else
          on the page proves, and the 90-second budget reaches them first. */}
      <div className={styles.plates}>
        {work.plates.map((plate) => (
          <Reveal
            key={plate.image}
            as="article"
            mode={plate.reveal}
            className={styles.plate}
          >
            <div className={styles.plateImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={plate.image}
                alt={plate.title[lang]}
                loading="lazy"
                style={plate.focus ? { objectPosition: plate.focus } : undefined}
              />
              <span className={styles.plateChip}>{plate.chip[lang]}</span>
              <span className={styles.plateYear}>{plate.year}</span>
            </div>

            <div className={styles.plateText}>
              <div className={styles.plateCopy}>
                <h3 className={styles.plateTitle}>
                  {plate.href ? (
                    <a
                      href={plate.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tap
                    >
                      {plate.title[lang]} <Glyph />
                    </a>
                  ) : (
                    plate.title[lang]
                  )}
                </h3>
                {/* The title's ↗ is generic — for a link that doesn't lead to
                    an ordinary webpage (e.g. it opens a video file directly),
                    this names the destination instead of leaving it a surprise. */}
                {plate.href && plate.linkLabel && (
                  <a
                    href={plate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.plateLinkLabel}
                  >
                    {plate.linkLabel[lang]} <Glyph />
                  </a>
                )}
                <p className={styles.plateDesc}>{plate.description[lang]}</p>
              </div>

              <div className={styles.plateTags}>
                {plate.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className={styles.msWrap}>
        <div className={styles.msBlock}>
          <div className={styles.msHead}>
            {/* A heading, not a span: navigating by heading is how a screen
                reader reaches this group, and it is the volume evidence. */}
            <h3 className={styles.msTitle}>{work.moscowSport.title[lang]}</h3>
            <span className={styles.msDesc}>
              {work.moscowSport.description[lang]}
            </span>
          </div>

          <div
            id="ms-grid"
            className={`${styles.msGrid} ${gridOpen ? styles.msGridOpen : ""}`}
          >
            {work.moscowSport.cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <span className={styles.thumb}>
                  {/* Decorative: the caption below already names the site, so
                      alt text here would announce every card twice. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt="" loading="lazy" />
                </span>
                <span className={styles.caption}>
                  <span>
                    {card.name} <Glyph />
                  </span>
                  <span className={styles.cardYear}>{card.year}</span>
                </span>
              </a>
            ))}
          </div>

          <button
            type="button"
            className={styles.msToggle}
            aria-expanded={gridOpen}
            aria-controls="ms-grid"
            onClick={() => setGridOpen((open) => !open)}
          >
            <span>
              {gridOpen
                ? work.moscowSport.showFewer[lang]
                : work.moscowSport.showAll[lang].replace(
                    "{n}",
                    String(cardCount)
                  )}
            </span>
            <PlusToggle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
