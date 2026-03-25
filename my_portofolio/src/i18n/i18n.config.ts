import { type InitOptions } from "i18next";
import { namespaces, type Namespace } from "./namespaces";
import { languages, type Language } from "./translationLoader";

export type NamespaceInput = Namespace | Namespace[];

export function assertNamespaces(ns?: NamespaceInput): Namespace[] | undefined {
  if (ns === undefined) {
    return undefined;
  }

  const requested = Array.isArray(ns) ? ns : [ns];
  const allowed = new Set<Namespace>(namespaces);

  const invalid = requested.filter((name) => !allowed.has(name));
  if (invalid.length > 0) {
    throw new Error(
      `Namespaces invalides: ${invalid.join(", ")}. Namespaces autorises: ${namespaces.join(", ")}.`
    );
  }

  const deduped = [...new Set(requested)];
  if (deduped.length !== requested.length) {
    throw new Error(`Doublons detectes dans les namespaces: ${requested.join(", ")}.`);
  }

  return deduped;
}

export function getOptions(lng: Language, ns?: NamespaceInput): InitOptions {
  const validatedNamespaces = assertNamespaces(ns);
  return {
    lng,
    fallbackLng: "en",
    supportedLngs: [...languages],
    defaultNS: namespaces[0],
    ns: validatedNamespaces ?? [...namespaces],
    interpolation: { escapeValue: false },
  };
}
