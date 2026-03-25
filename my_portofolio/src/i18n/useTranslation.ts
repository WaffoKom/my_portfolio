import {
  useTranslation as useI18NextTranslation,
  type UseTranslationOptions,
} from "react-i18next";
import type { Namespace } from "./namespaces";
import { assertNamespaces, type NamespaceInput } from "./i18n.config";

type TypedUseTranslationOptions = Omit<UseTranslationOptions<string>, "ns"> & {
  ns?: NamespaceInput;
};

export function useTranslation(options: TypedUseTranslationOptions = {}) {
  const { ns, ...translationOptions } = options;
  const validatedNamespaces = assertNamespaces(ns);
  return useI18NextTranslation(validatedNamespaces, translationOptions);
}

export type { Namespace };
