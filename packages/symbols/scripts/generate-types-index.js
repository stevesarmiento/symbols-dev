const fs = require("node:fs/promises");
const path = require("node:path");

function getIconExportNames(source) {
  const names = [];
  const exportRegex =
    /export\s+\{\s*(Icon[A-Za-z0-9_]+)\s*\}\s+from\s+['"]\.\/icons\/[A-Za-z0-9_]+['"]\s*;?/g;

  for (const match of source.matchAll(exportRegex)) {
    const iconName = match[1];
    if (!iconName) continue;
    names.push(iconName);
  }

  return names;
}

function buildTypesIndex(names) {
  const header = `import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
`;

  const exports = names.map((name) => `export declare const ${name}: IconComponent;`).join("\n");
  return `${header}\n${exports}\n`;
}

async function main() {
  const packageRoot = path.resolve(__dirname, "..");
  const srcIndexPath = path.join(packageRoot, "src", "index.js");
  const outDir = path.join(packageRoot, "types");
  const outFile = path.join(outDir, "index.d.ts");

  const srcIndex = await fs.readFile(srcIndexPath, "utf8");
  const iconNames = getIconExportNames(srcIndex);

  if (iconNames.length === 0) {
    throw new Error(
      "No icon exports found in src/index.js. Expected lines like: export { IconName } from './icons/IconName';",
    );
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(outFile, buildTypesIndex(iconNames), "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

