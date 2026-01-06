import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.it;
  switchLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  const lang: Language =
    location.pathname.startsWith("/de") ? "de" :
    location.pathname.startsWith("/en") ? "en" :
    "it"; // Default to Italian (primary language for Ticino)

  const t = translations[lang];

  const switchLanguage = (newLang: Language) => {
    if (newLang === "it") {
      window.location.href = "/";
    } else {
      window.location.href = `/${newLang}`;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
