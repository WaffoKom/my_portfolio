import { readdirSync, writeFileSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

const FR_LOCALES_DIR = resolve(process.cwd(), "src/i18n/locales/fr");
const OUTPUT_FILE = resolve(process.cwd(), "src/i18n/namespaces.ts");

function getNamespacesFromFrenchLocales(): readonly string[] {
  const localeEntries = readdirSync(FR_LOCALES_DIR, { withFileTypes: true }) as Array<{
    isFile: () => boolean;
    name: string;
  }>;

  const files = localeEntries
    .filter((entry) => entry.isFile() && extname(entry.name).toLowerCase() === ".json")
    .map((entry) => basename(entry.name, ".json"));

  if (files.length === 0) {
    throw new Error(`Aucun fichier .json trouve dans: ${FR_LOCALES_DIR}`);
  }

  const uniqueByCaseInsensitive = new Map<string, string>();
  for (const name of files) {
    const key = name.toLowerCase();
    const existing = uniqueByCaseInsensitive.get(key);
    if (existing !== undefined) {
      throw new Error(
        `Conflit de namespace detecte: "${existing}" et "${name}" (comparaison insensible a la casse).`
      );
    }
    uniqueByCaseInsensitive.set(key, name);
  }

  const namespaces = [...uniqueByCaseInsensitive.values()].sort((a, b) => a.localeCompare(b));
  return namespaces;
}

function buildFileContent(namespaces: readonly string[]): string {
  const serializedNamespaces = namespaces.map((name) => `  "${name}"`).join(",\n");
  return `/* eslint-disable */
// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY.
// Run: npm run generate-namespaces

export const namespaces = [
${serializedNamespaces}
] as const;

export type Namespace = (typeof namespaces)[number];
`;
}

function main(): void {
  const namespaces = getNamespacesFromFrenchLocales();
  const content = buildFileContent(namespaces);
  writeFileSync(OUTPUT_FILE, content, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Namespaces generes (${namespaces.length}) -> ${OUTPUT_FILE}`);
}

try {
  main();
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
}
