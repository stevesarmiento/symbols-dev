import type { IconCategoryId } from "./icon-taxonomy";

/**
 * Optional manual overrides for edge cases where name-based heuristics aren’t enough.
 * Keys must be **export names** from `symbols-react` (e.g. `IconBraveLogo`).
 */
export const ICON_CATEGORY_OVERRIDES: Readonly<
  Record<string, readonly IconCategoryId[]>
> = {};
