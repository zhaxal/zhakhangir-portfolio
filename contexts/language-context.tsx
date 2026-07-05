import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "ru" | "ja";

export const LANGS: Lang[] = ["en", "ru", "ja"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

const STORAGE_KEY = "portfolio-lang";

const isLang = (value: unknown): value is Lang =>
  value === "en" || value === "ru" || value === "ja";

// Map the visitor's browser languages to one we support; default to English.
const detectLang = (): Lang => {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of candidates) {
    const base = tag.toLowerCase().split("-")[0];
    if (base === "ja" || base === "ru" || base === "en") {
      return base as Lang;
    }
  }
  return "en";
};

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Always render "en" on first paint so static-export hydration matches,
  // then swap to the stored/detected language on the client.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) {
      // Returning visitor: honor their previous choice.
      setLangState(stored);
    } else {
      // First visit: match the browser language, falling back to English.
      const detected = detectLang();
      setLangState(detected);
      document.documentElement.lang = detected;
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
