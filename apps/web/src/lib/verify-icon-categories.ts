import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { assertValidIconCategoryIds, getIconCategoryIds } from "./icon-categorization";
import { ICON_CATEGORY_IDS } from "./icon-taxonomy";

function getRepoRootFromThisFile() {
  const filePath = fileURLToPath(import.meta.url);
  const dirPath = path.dirname(filePath);
  return path.resolve(dirPath, "../../../..");
}

function extractIconExportNames(indexJs: string) {
  const exportRegex =
    /export\s+\{\s*(Icon[A-Za-z0-9]+)\s*\}\s+from\s+['"][^'"]+['"];/g;

  const names = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = exportRegex.exec(indexJs)) !== null) {
    const name = match[1];
    if (name) names.add(name);
  }

  return Array.from(names).sort((a, b) => a.localeCompare(b));
}

function formatCountTable(entries: Array<[string, number]>) {
  const maxKeyLength = entries.reduce(
    (max, [key]) => Math.max(max, key.length),
    0,
  );
  return entries
    .map(([key, value]) => `${key.padEnd(maxKeyLength)}  ${String(value)}`)
    .join("\n");
}

async function main() {
  const repoRoot = getRepoRootFromThisFile();
  const symbolsIndexPath = path.join(repoRoot, "packages/symbols/src/index.js");

  const indexJs = await readFile(symbolsIndexPath, "utf8");
  const iconNames = extractIconExportNames(indexJs);

  const counts = new Map<string, number>(ICON_CATEGORY_IDS.map((id) => [id, 0]));
  const otherOnly: string[] = [];

  for (const iconName of iconNames) {
    const categoryIds = getIconCategoryIds(iconName);
    if (categoryIds.length === 1 && categoryIds[0] === "other") otherOnly.push(iconName);

    assertValidIconCategoryIds(iconName, categoryIds);

    for (const id of categoryIds) {
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }
  }

  const countEntries = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

  console.log(`symbols-react exports (Icon*): ${iconNames.length}`);
  console.log(`taxonomy categories:           ${ICON_CATEGORY_IDS.length}`);
  console.log("");
  console.log("Category counts (note: multi-category icons are counted multiple times):");
  console.log(formatCountTable(countEntries));
  console.log("");
  console.log(`Icons categorized as only "other": ${otherOnly.length}`);

  if (otherOnly.length > 0) {
    console.log("");
    console.log("First 50 \"other\" icons:");
    for (const name of otherOnly.slice(0, 50)) console.log(`- ${name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
