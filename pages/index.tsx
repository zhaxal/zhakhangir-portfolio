import { NextPage } from "next";

import ContactForm from "@/components/ContactForm";
import LoopVideo from "@/components/LoopVideo";
import { LANGS, LANG_LABELS, useLanguage } from "@/contexts/language-context";
import {
  contact,
  education,
  eventSites,
  experience,
  links,
  papers,
  profile,
  sections,
  site,
  skills,
  thesis,
  toverlay,
  ui,
} from "@/data/content";

const Home: NextPage = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="page">
      <header className="intro">
        <div className="intro-top">
          <h1>{site.name[lang]}</h1>
          <div className="lang" role="group" aria-label={ui.language[lang]}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>
        </div>
        {lang !== "en" && (
          <p className="muted" lang="en">
            {site.name.en}
          </p>
        )}
        <p>
          {site.role[lang]} · {site.location[lang]}
        </p>
        <p className="contact-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {links.map((link) => (
            <span key={link.href}>
              {" · "}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
      </header>

      <main>
        <p>{profile[lang]}</p>

        <section id="experience">
          <h2>{sections.experience[lang]}</h2>
          {experience.map((job) => (
            <article key={job.id} id={job.id} className="entry">
              <div className="entry-head">
                <h3>
                  {job.href ? <a href={job.href}>{job.company}</a> : job.company}
                </h3>
                <span className="muted">{job.dates[lang]}</span>
              </div>
              <p className="muted">
                {job.role[lang]} · {job.location[lang]}
              </p>
              <ul>
                {job.points.map((point) => (
                  <li key={point.en}>{point[lang]}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>{sections.projects[lang]}</h2>

          <article id={eventSites.id} className="entry">
            <div className="entry-head">
              <h3>{eventSites.title[lang]}</h3>
              <span className="muted">{eventSites.meta[lang]}</span>
            </div>
            <p className="muted">{eventSites.note[lang]}</p>
            <ul className="sites">
              {eventSites.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <img
                      src={item.image}
                      alt=""
                      width={160}
                      height={100}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      <span className="site-name">{item.name[lang]}</span>{" "}
                      <span className="muted">({item.years})</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article id={toverlay.id} className="entry">
            <div className="entry-head">
              <h3>{toverlay.title[lang]}</h3>
              <span className="muted">{toverlay.meta[lang]}</span>
            </div>
            <ul>
              {toverlay.points.map((point) => (
                <li key={point.en}>{point[lang]}</li>
              ))}
            </ul>
            <p className="entry-link">
              <a href={toverlay.link.href}>{toverlay.link.label[lang]}</a>
            </p>
          </article>

          <article id={thesis.id} className="entry has-media">
            <div>
              <h3>{thesis.title[lang]}</h3>
              <p className="muted">{thesis.meta[lang]}</p>
              <ul>
                {thesis.points.map((point) => (
                  <li key={point.en}>{point[lang]}</li>
                ))}
              </ul>
            </div>
            <a href={thesis.media.href} className="media">
              <LoopVideo
                src={thesis.media.video}
                poster={thesis.media.poster}
                width={320}
                height={312}
              />
              <span>{thesis.media.label[lang]}</span>
            </a>
          </article>
        </section>

        <section id="papers">
          <h2>{sections.papers[lang]}</h2>
          <ul className="plain">
            {papers.map((paper) => (
              <li key={paper.href}>
                <a href={paper.href}>{paper.title}</a>
                <br />
                <span className="muted">
                  {paper.venue[lang]} · {paper.year}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>{sections.skills[lang]}</h2>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label.en}>
                <dt>{group.label[lang]}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="education">
          <h2>{sections.education[lang]}</h2>
          {education.map((school) => (
            <article key={school.name.en} className="entry">
              <div className="entry-head">
                <h3>{school.name[lang]}</h3>
                <span className="muted">{school.dates[lang]}</span>
              </div>
              <p className="muted">
                {school.degree[lang]} · {school.location[lang]}
              </p>
              {school.note && <p className="muted">{school.note[lang]}</p>}
            </article>
          ))}
        </section>

        <section id="contact">
          <h2>{sections.contact[lang]}</h2>
          <p>{contact.availability[lang]}</p>
          <p>
            {contact.emailLead[lang]}{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <ContactForm />
        </section>
      </main>

      <footer className="footer muted">{site.copyright}</footer>
    </div>
  );
};

export default Home;
