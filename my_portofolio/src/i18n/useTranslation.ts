import {
  useTranslation as useI18NextTranslation,
  type UseTranslationOptions,
} from "react-i18next";
import type { Namespace } from "./namespaces";
import { assertNamespaces, type NamespaceInput } from "./i18n.config";

export function useTranslations(
  ns?: NamespaceInput,
  options?: Omit<UseTranslationOptions<string>, "ns">
): ReturnType<typeof useI18NextTranslation> {
  const validatedNamespaces = assertNamespaces(ns);
  return useI18NextTranslation(validatedNamespaces, options);
}

export type { Namespace };
