import { FC, FormEvent, useRef, useState } from "react";
import { addDoc } from "firebase/firestore";
import { messagesCol } from "@/database/client";
import { useLanguage } from "@/contexts/language-context";
import { contact, site, socials } from "@/data/content";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Glyph from "@/components/ui/Glyph";
import section from "./section.module.css";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error" | "timeout";

/**
 * Validation stores *what went wrong*, never a resolved sentence — otherwise a
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

const Contact: FC = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<{
    email?: FieldIssue;
    text?: FieldIssue;
  }>({});
  const [status, setStatus] = useState<Status>("idle");
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

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

    // Move focus to the first field that needs attention. Without this,
    // pressing Send on an empty form is completely silent for a screen-reader
    // user — focus stays on the button and nothing is announced. Landing on the
    // field reads its label, its invalid state, and its aria-describedby error.
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
      // Only clear on a confirmed write — a failed send must never eat the
      // message the visitor just typed.
      setEmail("");
      setText("");
      setStatus("sent");
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
      : status === "sent"
      ? contact.sent[lang]
      : status === "error"
      ? contact.failed[lang]
      : status === "timeout"
      ? contact.timedOut[lang]
      : "";

  return (
    <section id="contact" className={`${section.section} ${section.bordered}`}>
      <div className={`${section.inner} ${styles.grid}`}>
        <div className={styles.left}>
          <SectionLabel marker="dot">{contact.label[lang]}</SectionLabel>
          <SectionTitle lines={contact.title.map((line) => line[lang])} />
          <p className={styles.availability}>{contact.availability[lang]}</p>
          <div className={styles.links}>
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-tap
              >
                {social.label} <Glyph />
              </a>
            ))}
          </div>
        </div>

        {/* The submit path is client-side only, so without JS the form is a
            control that does nothing. Say so and give a route that works. */}
        <noscript>
          <p className={styles.noScript}>
            {contact.noScript[lang]}{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </noscript>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
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
              className={`${styles.input} ${
                errors.email ? styles.invalid : ""
              }`}
            />
            {emailError && (
              <span id="email-error" className={styles.fieldError}>
                {emailError}
              </span>
            )}
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{contact.messageLabel[lang]}</span>
            <textarea
              ref={textRef}
              name="text"
              required
              rows={4}
              maxLength={MAX_MESSAGE}
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder={contact.messagePlaceholder[lang]}
              aria-invalid={Boolean(errors.text)}
              aria-describedby={errors.text ? "text-error" : undefined}
              className={`${styles.input} ${errors.text ? styles.invalid : ""}`}
            />
            {textError && (
              <span id="text-error" className={styles.fieldError}>
                {textError}
              </span>
            )}
          </label>

          <Button
            type="submit"
            variant="brand"
            size="lg"
            dot
            disabled={status === "sending"}
          >
            {contact.send[lang]}
          </Button>

          <span
            role="status"
            aria-live="polite"
            className={`${styles.status} ${
              statusMessage ? styles.visible : ""
            } ${status === "sending" ? styles.pending : ""}`}
          >
            {statusMessage || " "}
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
