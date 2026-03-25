import { namespaces, type Namespace } from "./namespaces";

const SECTION_EXCLUDED_NAMESPACES = new Set<Namespace>(["metadata", "navbar"]);

const SECTION_ROUTE_ALIAS: Partial<Record<Namespace, string>> = {
  experience: "career",
  project: "projects",
};

export const sectionRoutes = namespaces
  .filter((namespace) => !SECTION_EXCLUDED_NAMESPACES.has(namespace))
  .map((namespace) => SECTION_ROUTE_ALIAS[namespace] ?? namespace);

export const validSectionSet = new Set(sectionRoutes);
