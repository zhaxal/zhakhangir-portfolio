import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "ja";

export const LANGS: Lang[] = ["en", "ja"];

// Label shown on the header language switch.
export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  ja: "日本語",
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** How many times the language has changed since load; 0 on first paint. */
  swaps: number;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  swaps: 0,
});

const STORAGE_KEY = "portfolio-lang";

const isLang = (value: unknown): value is Lang =>
  value === "en" || value === "ja";

// Map the visitor's browser languages to one we support; default to English.
const detectLang = (): Lang => {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of candidates) {
    const base = tag.toLowerCase().split("-")[0];
    if (base === "ja" || base === "en") {
      return base as Lang;
    }
  }
  return "en";
};

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Always render "en" on first paint so static-export hydration matches,
  // then swap to the stored/detected language on the client.
  const [lang, setLangState] = useState<Lang>("en");
  const [swaps, setSwaps] = useState(0);

  useEffect(() => {
    // Storage can throw in private windows; fall back to detection.
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    const next = isLang(stored) ? stored : detectLang();
    if (next !== "en") setSwaps(1);
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    setLangState(next);
    setSwaps((count) => count + 1);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, swaps }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
