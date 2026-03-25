import i18n from "i18next";
import ICU from "i18next-icu";
import { initReactI18next } from "react-i18next";
import { getOptions } from "./i18n/i18n.config";
import { languages, type Language, loadClientTranslations } from "./i18n/translationLoader";
import { type Namespace, namespaces } from "./i18n/namespaces";

type ResourcePayload = Record<Language, Record<Namespace, Record<string, unknown>>>;

function resolveInitialLanguage(): Language {
  const saved = localStorage.getItem("language");
  if (saved !== null && (languages as readonly string[]).includes(saved)) {
    return saved as Language;
  }
  return "en";
}

async function loadAllResources(): Promise<ResourcePayload> {
  const entries = await Promise.all(
    languages.map(async (language) => {
      const content = await loadClientTranslations(language);
      return [language, content] as const;
    })
  );
  return Object.fromEntries(entries) as ResourcePayload;
}

export const i18nReady = (async (): Promise<typeof i18n> => {
  const lng = resolveInitialLanguage();
  const resources = await loadAllResources();

  await i18n.use(ICU).use(initReactI18next).init({
    ...getOptions(lng),
    ns: [...namespaces],
    resources,
    debug: true,
    react: {
      useSuspense: false,
    },
  });

  return i18n;
})();

export default i18n;
