import type { Namespace } from "./namespaces";
import { namespaces } from "./namespaces";

export const languages = ["fr", "en", "es"] as const;
export type Language = (typeof languages)[number];

type TranslationRecord = Record<string, unknown>;

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
  const module = await import(`./locales/${language}/${namespace}.json`);
  return module.default as TranslationRecord;
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
