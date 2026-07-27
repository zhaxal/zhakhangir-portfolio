import { FC } from "react";
import Head from "next/head";
import { useLanguage } from "@/contexts/language-context";
import { hero } from "@/data/content";
import Glyph from "@/components/ui/Glyph";
import styles from "./Hero.module.css";

// React 18.2 neither types nor recognises `fetchPriority`; passing it as a
// lowercase raw attribute keeps it in the HTML without a dev warning.
const heroPriority = { fetchpriority: "high" } as Record<string, string>;

const Hero: FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="top" className={styles.hero}>
      <Head>
        {/* The hero photo is the LCP element; start it before the CSS resolves. */}
        <link rel="preload" as="image" href="/hero.jpg" />
      </Head>
      <div className={styles.photo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.jpg" alt="" {...heroPriority} />
      </div>
      <div className={styles.scrim} />

      <div className={`${styles.row} ${styles.meta}`}>
        <div className={styles.metaText}>
          <span className={styles.eyebrow}>{hero.eyebrow[lang]}</span>
          <p className={styles.intro}>{hero.intro[lang]}</p>
        </div>
        <ul className={styles.caps}>
          {hero.capabilities.map((capability) => (
            <li key={capability.en}>{capability[lang]}</li>
          ))}
        </ul>
      </div>

      {/* Masked lines carry the entrance animation; without the label a screen
          reader reads the two halves as one word ("ZhakhangirAnuarbek"). */}
      <h1
        className={`${styles.row} ${styles.headline}`}
        aria-label={`${hero.line1[lang]} ${hero.line2[lang]}`}
      >
        <span className={styles.mask}>
          <span>{hero.line1[lang]}</span>
        </span>
        <span className={styles.mask}>
          <span>{hero.line2[lang]}</span>
        </span>
      </h1>

      <div className={`${styles.row} ${styles.foot}`}>
        <span className={styles.stat}>{hero.stat[lang]}</span>
        <a href="#work" className={styles.cue} data-tap>
          {hero.scroll[lang]} <Glyph char="↓" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
