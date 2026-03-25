import type { Namespace } from "./namespaces";
import { namespaces } from "./namespaces";

export const languages = ["fr", "en"] as const;
export type Language = (typeof languages)[number];

type TranslationRecord = Record<string, unknown>;
type TranslationModule = { default: TranslationRecord };

const translationModules = import.meta.glob<TranslationModule>("./locales/*/*.json");

function asArray(ns: Namespace | Namespace[] | undefined): Namespace[] {
  if (ns === undefined) {
    return [...namespaces];
  }
  return Array.isArray(ns) ? ns : [ns];
}
async function loadClientTranslation(
  language: Language,
  namespace: Namespace
): Promise<TranslationRecord> {
  const modulePath = `./locales/${language}/${namespace}.json`;
  const loader = translationModules[modulePath];

  if (loader === undefined) {
    throw new Error(`Translation file not found: ${modulePath}`);
  }

  const module = await loader();
  return module.default;
}

export async function loadClientTranslations(
  language: Language,
  ns?: Namespace | Namespace[]
): Promise<Record<Namespace, TranslationRecord>> {
  const selectedNamespaces = asArray(ns);
  const pairs = await Promise.all(
    selectedNamespaces.map(async (namespace) => {
      const data = await loadClientTranslation(language, namespace);
      return [namespace, data] as const;
    })
  );
  return Object.fromEntries(pairs) as Record<Namespace, TranslationRecord>;
}
