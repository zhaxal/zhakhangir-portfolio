import { FC, FormEvent, useRef, useState } from "react";
import { addDoc } from "firebase/firestore";
import { messagesCol } from "@/database/client";
import { useLanguage } from "@/contexts/language-context";
import { contact } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error" | "timeout";

/**
 * Validation stores what went wrong, not a sentence, so the error text follows
 * a language switch instead of staying in the language it was raised in.
 */
type FieldIssue = "required" | "invalid";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** RFC 5321 caps an address at 254 chars; the message cap is a sanity bound. */
const MAX_EMAIL = 254;
const MAX_MESSAGE = 4000;

/**
 * Firestore buffers writes while offline instead of rejecting, so `addDoc` can
 * stay pending forever and leave the button disabled. Race it.
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

/** Posts `{ email, text }` to the Firestore `messages` collection. */
const ContactForm: FC = () => {
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

  const emailError = errors.email
    ? (errors.email === "invalid"
        ? contact.emailInvalid
        : contact.emailRequired)[lang]
    : "";
  const textError = errors.text ? contact.messageRequired[lang] : "";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const issues: { email?: FieldIssue; text?: FieldIssue } = {};
    if (!email.trim()) issues.email = "required";
    else if (!EMAIL_PATTERN.test(email.trim())) issues.email = "invalid";
    if (!text.trim()) issues.text = "required";
    setErrors(issues);

    // Move focus to the first field that needs attention so the error is
    // announced, rather than leaving a screen-reader user on the button.
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
      // Clear only on a confirmed write, so a failed send never eats the text.
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

  if (status === "sent") {
    return (
      <div className="contact-form">
        <p role="status">{contact.sent[lang]}</p>
        <button type="button" onClick={() => setStatus("idle")}>
          {contact.again[lang]}
        </button>
      </div>
    );
  }

  const statusMessage =
    status === "sending"
      ? contact.sending[lang]
      : status === "error"
      ? contact.failed[lang]
      : status === "timeout"
      ? contact.timedOut[lang]
      : "";

  return (
    <div className="contact-form">
      <p>{contact.formLead[lang]}</p>
      <noscript>
        <p>{contact.noScript[lang]}</p>
      </noscript>
      <form className="form" onSubmit={onSubmit} noValidate>
        <label htmlFor="contact-email">{contact.emailLabel[lang]}</label>
        <input
          ref={emailRef}
          id="contact-email"
          type="email"
          name="email"
          required
          maxLength={MAX_EMAIL}
          autoComplete="email"
          spellCheck={false}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {emailError && (
          <p id="contact-email-error" className="error">
            {emailError}
          </p>
        )}

        <label htmlFor="contact-text">{contact.messageLabel[lang]}</label>
        <textarea
          ref={textRef}
          id="contact-text"
          name="text"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          value={text}
          onChange={(event) => setText(event.target.value)}
          aria-invalid={Boolean(errors.text)}
          aria-describedby={errors.text ? "contact-text-error" : undefined}
        />
        {textError && (
          <p id="contact-text-error" className="error">
            {textError}
          </p>
        )}

        <div>
          <button type="submit" disabled={status === "sending"}>
            {contact.send[lang]}
          </button>
        </div>

        <p
          role="status"
          aria-live="polite"
          className={status === "error" || status === "timeout" ? "error" : ""}
        >
          {statusMessage}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
