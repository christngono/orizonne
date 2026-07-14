import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "./content";

const STORAGE_KEY = "orizonne-lang";
const LanguageContext = createContext(null);

function initialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "fr" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "fr" ? "en" : "fr")),
      t: content[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang doit être utilisé dans un <LanguageProvider>");
  return ctx;
}
