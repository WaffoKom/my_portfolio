import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    defaultNS: "about",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "about",
      "navbar",
      "project",
      "skills",
      "testimonials",
      "experience",
      "services",
      "contact",
      "metadata",
    ],
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
