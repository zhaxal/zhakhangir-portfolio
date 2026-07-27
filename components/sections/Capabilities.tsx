import { FC, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { capabilities } from "@/data/content";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import PlusToggle from "@/components/ui/PlusToggle";
import section from "./section.module.css";
import styles from "./Capabilities.module.css";

const Capabilities: FC = () => {
  const { lang } = useLanguage();
  // Rows are independent; all start closed.
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );

  return (
    <section className={section.section}>
      <div className={section.inner}>
        <div className={`${section.head} ${section.headCapabilities}`}>
          <SectionLabel marker="dot">{capabilities.label[lang]}</SectionLabel>
          <SectionTitle lines={capabilities.title.map((line) => line[lang])} />
        </div>

        <div className={styles.accordion}>
          {capabilities.rows.map((row, index) => {
            const isOpen = open.includes(index);
            const bodyId = `capability-${index}`;

            return (
              <div key={row.label.en} className={styles.row}>
                <button
                  type="button"
                  className={styles.header}
                  aria-expanded={isOpen}
                  aria-controls={bodyId}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.label}>{row.label[lang]}</span>
                  <PlusToggle />
                </button>

                {/* The stack is the highest-value scan target on the page, so
                    it stays visible; only the prose explanation collapses. */}
                <div className={styles.chips}>
                  {row.chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Collapsed to 0fr it is invisible but still in the a11y tree,
                    contradicting aria-expanded="false". `inert` removes it from
                    AT and tab order; aria-hidden covers browsers without inert.
                    React 18.2 doesn't type `inert`, hence the spread. */}
                <div
                  id={bodyId}
                  className={`${styles.body} ${isOpen ? styles.open : ""}`}
                  aria-hidden={!isOpen}
                  {...(isOpen ? {} : ({ inert: "" } as Record<string, string>))}
                >
                  <div className={styles.bodyInner}>
                    <p className={styles.copy}>{row.body[lang]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
