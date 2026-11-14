import { FC, FormEvent, useRef, useState } from "react";
import { addDoc } from "firebase/firestore";
import { messagesCol } from "@/database/client";
import { useLanguage } from "@/contexts/language-context";
import { a11y, contact, site, socials } from "@/data/content";
import Icon from "@/components/ui/Icon";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error" | "timeout";

/**
 * Validation stores *what went wrong*, never a resolved sentence: otherwise a
 * visitor who submits an empty form and then switches language keeps reading
 * the errors in the language they left.
 */
type FieldIssue = "required" | "invalid";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** RFC 5321 caps an address at 254 chars; the message cap is a sanity bound. */
const MAX_EMAIL = 254;
const MAX_MESSAGE = 4000;

/**
 * Firestore buffers writes while offline instead of rejecting, so `addDoc` can
 * stay pending indefinitely and leave the button disabled forever. Race it.
 */
const SUBMIT_TIMEOUT_MS = 15000;

const withTimeout = <T,>(work: Promise<T>, ms: number) =>
  new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    work.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });

/**
 * Contact, at the end of the road. Two ways in, side by side: the email
 * address and profiles, or the message form.
 */
const Contact: FC = () => {
  const { lang } = useLanguage();
  const other = lang === "en" ? "ja" : "en";
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<{
    email?: FieldIssue;
    text?: FieldIssue;
  }>({});
  const [status, setStatus] = useState<Status>("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const boothRef = useRef<HTMLDivElement>(null);

  const collectIssues = () => {
    const next: { email?: FieldIssue; text?: FieldIssue } = {};
    if (!email.trim()) next.email = "required";
    else if (!EMAIL_PATTERN.test(email.trim())) next.email = "invalid";
    if (!text.trim()) next.text = "required";
    return next;
  };

  // Resolved at render, so the current locale always owns the wording.
  const emailError = errors.email
    ? (errors.email === "invalid"
        ? contact.emailInvalid
        : contact.emailRequired)[lang]
    : "";
  const textError = errors.text ? contact.messageRequired[lang] : "";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const issues = collectIssues();
    setErrors(issues);

    // Move focus to the first field that needs attention, so the problem is
    // announced instead of leaving a screen-reader user on a silent button.
    if (issues.email || issues.text) {
      (issues.email ? emailRef : textRef).current?.focus();
      return;
    }

    setStatus("sending");
    try {
      await withTimeout(
        addDoc(messagesCol(), { email: email.trim(), text: text.trim() }),
        SUBMIT_TIMEOUT_MS
      );
      // Only clear on a confirmed write: a failed send must never eat the
      // message the visitor just typed.
      setEmail("");
      setText("");
      setStatus("sent");
      // The confirmation replaces the form; keep it in view.
      boothRef.current?.scrollIntoView({ block: "nearest" });
    } catch (error) {
      setStatus(
        error instanceof Error && error.message === "timeout"
          ? "timeout"
          : "error"
      );
    }
  };

  const statusMessage =
    status === "sending"
      ? contact.sending[lang]
      : status === "error"
      ? contact.failed[lang]
      : status === "timeout"
      ? contact.timedOut[lang]
      : "";

  return (
    <section id="contact" className={styles.gate}>
      <div className="wrap">
        <header className={`sign signGate ${styles.head}`}>
          <h2 className={styles.title}>{contact.title[lang]}</h2>
          <p className={styles.other} lang={other}>
            {contact.title[other]}
          </p>
          <p className={styles.availability}>{contact.availability[lang]}</p>
        </header>
      </div>

      {/* The canopy over the gate, seen from above. */}
      <div className={styles.canopy} aria-hidden="true" />

      <div className={`wrap ${styles.lanes}`}>
        <div className={styles.lane}>
          <h3 className={styles.laneTitle}>{contact.emailTitle[lang]}</h3>

          <div className={`board ${styles.through}`}>
            <img
              src="/portrait.jpg"
              alt={contact.portraitAlt[lang]}
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              className={styles.portrait}
            />
            <div>
              <a href={`mailto:${site.email}`} className={styles.mail}>
                {site.email}
              </a>
              <p className={styles.exitsLabel}>{contact.profiles[lang]}</p>
              <ul className={styles.exits}>
                {socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.exitArrow} aria-hidden="true">
                        <Icon name="sign" dir="out" size={16} />
                      </span>
                      {social.label}
                      <span className="visuallyHidden">
                        {" "}
                        ({a11y.external[lang]})
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.lane}>
          <h3 className={styles.laneTitle}>{contact.formTitle[lang]}</h3>

          {/* The submit path is client-side only, so without JS the form is a
              control that does nothing. Say so and give a route that works. */}
          <noscript>
            <p className={styles.noScript}>
              {contact.noScript[lang]}{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </noscript>

          <div ref={boothRef} className={styles.booth}>
            {status === "sent" ? (
              <div className={`board ${styles.sent}`} role="status">
                <h4 className={styles.sentTitle}>{contact.sent.title[lang]}</h4>
                <p>{contact.sent.body[lang]}</p>
                <button
                  type="button"
                  className={styles.again}
                  onClick={() => setStatus("idle")}
                >
                  {contact.sent.again[lang]}
                </button>
              </div>
            ) : (
              <form
                className={`board ${styles.form}`}
                onSubmit={onSubmit}
                noValidate
              >
                <label className={styles.field}>
                  <span className={styles.label}>{contact.emailLabel[lang]}</span>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    required
                    maxLength={MAX_EMAIL}
                    autoComplete="email"
                    spellCheck={false}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={contact.emailPlaceholder[lang]}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={styles.input}
                  />
                  {emailError && (
                    <span id="email-error" className={styles.fieldError}>
                      <Icon name="alert" size={16} />
                      {emailError}
                    </span>
                  )}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>
                    {contact.messageLabel[lang]}
                  </span>
                  <textarea
                    ref={textRef}
                    name="text"
                    required
                    rows={5}
                    maxLength={MAX_MESSAGE}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder={contact.messagePlaceholder[lang]}
                    aria-invalid={Boolean(errors.text)}
                    aria-describedby={errors.text ? "text-error" : undefined}
                    className={styles.input}
                  />
                  {textError && (
                    <span id="text-error" className={styles.fieldError}>
                      <Icon name="alert" size={16} />
                      {textError}
                    </span>
                  )}
                </label>

                <button
                  type="submit"
                  className={styles.send}
                  disabled={status === "sending"}
                >
                  {contact.send[lang]}
                  <Icon size={22} />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={styles.status}
                  data-state={status}
                >
                  {(status === "error" || status === "timeout") && (
                    <Icon name="alert" size={16} />
                  )}
                  {statusMessage}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
