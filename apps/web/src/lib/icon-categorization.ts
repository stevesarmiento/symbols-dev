import {
  ICON_CATEGORIES,
  ICON_CATEGORY_ID_SET,
  type IconCategoryDefinition,
  type IconCategoryId,
} from "./icon-taxonomy";
import { ICON_CATEGORY_OVERRIDES } from "./icon-overrides";

const STYLE_TOKENS = new Set<string>(["fill", "filled"]);
const STOP_TOKENS = new Set<string>([
  "and",
  "or",
  "on",
  "in",
  "of",
  "to",
  "from",
  "with",
  "without",
]);

function stripIconPrefix(value: string) {
  const trimmed = value.trim();
  return trimmed.startsWith("Icon") ? trimmed.slice("Icon".length) : trimmed;
}

function toLowerIconBasename(value: string) {
  return stripIconPrefix(value).toLowerCase();
}

function splitPascalCaseIntoTokens(value: string) {
  const spaced = value
    .replace(/[_\-\s]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-zA-Z])/g, "$1 $2");

  return spaced
    .split(/[^a-zA-Z0-9]+/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function tokenizeIconName(iconName: string) {
  const basename = stripIconPrefix(iconName);
  if (!basename) return [];

  const rawParts = splitPascalCaseIntoTokens(basename);

  return rawParts
    .map((part) => part.toLowerCase())
    .filter((token) => !STYLE_TOKENS.has(token))
    .filter((token) => !STOP_TOKENS.has(token));
}

function matchesCategory(
  category: IconCategoryDefinition,
  tokens: readonly string[],
  nameLower: string,
) {
  if (category.anyTokens) {
    const tokenSet = new Set(tokens);
    for (const token of category.anyTokens) {
      if (tokenSet.has(token)) return true;
    }
  }

  if (category.anyTokenPrefixes) {
    for (const token of tokens) {
      for (const prefix of category.anyTokenPrefixes) {
        if (token.startsWith(prefix)) return true;
      }
    }
  }

  if (category.anyTokenSuffixes) {
    for (const token of tokens) {
      for (const suffix of category.anyTokenSuffixes) {
        if (token.endsWith(suffix)) return true;
      }
    }
  }

  if (category.anyFirstTokens) {
    const firstToken = tokens[0];
    if (firstToken) {
      for (const token of category.anyFirstTokens) {
        if (firstToken === token) return true;
      }
    }
  }

  if (category.anySubstrings) {
    for (const substring of category.anySubstrings) {
      if (nameLower.includes(substring)) return true;
    }
  }

  if (category.anyRegexes) {
    for (const regex of category.anyRegexes) {
      if (regex.test(nameLower)) return true;
    }
  }

  return false;
}

export function getIconCategoryIds(iconName: string): IconCategoryId[] {
  const normalizedIconName = iconName.trim();
  const override = ICON_CATEGORY_OVERRIDES[normalizedIconName];
  if (override && override.length) {
    assertValidIconCategoryIds(normalizedIconName, override);
    return Array.from(new Set(override));
  }

  const nameLower = toLowerIconBasename(normalizedIconName);
  const tokens = tokenizeIconName(normalizedIconName);

  const matched: IconCategoryId[] = [];

  for (const category of ICON_CATEGORIES) {
    if (category.id === "other") continue;
    if (matchesCategory(category, tokens, nameLower)) matched.push(category.id);
  }

  if (matched.length === 0) return ["other"];

  // Deduplicate while preserving order.
  return Array.from(new Set(matched));
}

export function buildIconCategoriesByName(iconNames: readonly string[]) {
  const categoriesByName: Record<string, IconCategoryId[]> = {};

  for (const iconName of iconNames) {
    categoriesByName[iconName] = getIconCategoryIds(iconName);
  }

  return categoriesByName;
}

export function getAllIconExportNames(iconsModule: Record<string, unknown>) {
  return Object.keys(iconsModule)
    .filter((name) => name.startsWith("Icon"))
    .sort((a, b) => a.localeCompare(b));
}

export function assertValidIconCategoryIds(
  iconName: string,
  categoryIds: readonly string[],
) {
  for (const id of categoryIds) {
    if (!ICON_CATEGORY_ID_SET.has(id as IconCategoryId)) {
      throw new Error(
        `Invalid category id ${JSON.stringify(id)} for icon ${JSON.stringify(iconName)}`,
      );
    }
  }
}
