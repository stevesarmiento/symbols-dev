'use client'

import { Suspense, useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import * as Icons from "symbols-react";

import IconsList, { type IconProps } from "@/components/IconsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { getIconCategoryIds } from "@/lib/icon-categorization";
import { ICON_CATEGORIES, type IconCategoryId } from "@/lib/icon-taxonomy";

const ICONS_PER_PAGE = 60;

type CategoryFilterId = IconCategoryId | "all";

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function DashboardContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchFromUrl = searchParams.get("search") ?? "";
  const rawCategoryFromUrl = searchParams.get("category");
  const categoryFromUrl: CategoryFilterId =
    rawCategoryFromUrl && ICON_CATEGORIES.some((c) => c.id === rawCategoryFromUrl)
      ? (rawCategoryFromUrl as IconCategoryId)
      : "all";

  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryFilterId>(
    categoryFromUrl,
  );
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView({ threshold: 0, rootMargin: "200px" });

  useEffect(() => {
    setSelectedCategoryId(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    setPage(1);
  }, [searchFromUrl, selectedCategoryId]);

  const { iconEntries, categoriesByName, categoryCounts } = useMemo(() => {
    const allEntries = Object.entries(Icons).filter(([name]) => name.startsWith("Icon"));

    const categoriesByName: Record<string, IconCategoryId[]> = {};
    const categoryCounts: Record<IconCategoryId, number> = ICON_CATEGORIES.reduce(
      (acc, category) => {
        acc[category.id] = 0;
        return acc;
      },
      {} as Record<IconCategoryId, number>,
    );

    for (const [iconName] of allEntries) {
      const ids = getIconCategoryIds(iconName);
      categoriesByName[iconName] = ids;
      for (const id of ids) categoryCounts[id] += 1;
    }

    return { iconEntries: allEntries, categoriesByName, categoryCounts };
  }, []);

  const filteredIcons = useMemo(() => {
    const search = normalizeSearch(searchFromUrl);

    return iconEntries.filter(([name]) => {
      if (selectedCategoryId !== "all") {
        const ids = categoriesByName[name] ?? [];
        if (!ids.includes(selectedCategoryId)) return false;
      }

      if (!search) return true;

      const lower = name.toLowerCase();
      const withoutPrefix = lower.startsWith("icon") ? lower.slice("icon".length) : lower;
      return lower.includes(search) || withoutPrefix.includes(search);
    });
  }, [categoriesByName, iconEntries, searchFromUrl, selectedCategoryId]);

  const visibleIcons = useMemo(() => {
    return filteredIcons.slice(0, page * ICONS_PER_PAGE) as [
      string,
      ComponentType<IconProps>,
    ][];
  }, [filteredIcons, page]);

  const hasMore = visibleIcons.length < filteredIcons.length;

  useEffect(() => {
    if (inView && hasMore) setPage((p) => p + 1);
  }, [hasMore, inView]);

  function replaceParams(next: { search?: string; category?: CategoryFilterId }) {
    const params = new URLSearchParams();

    const search = next.search ?? searchFromUrl;
    const category = next.category ?? selectedCategoryId;

    const normalizedSearch = search.trim();
    if (normalizedSearch) params.set("search", normalizedSearch);
    if (category !== "all") params.set("category", category);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function handleCategoryChange(next: string) {
    const nextCategory =
      next && ICON_CATEGORIES.some((c) => c.id === next)
        ? (next as IconCategoryId)
        : "all";
    setSelectedCategoryId(nextCategory);
    replaceParams({ category: nextCategory });
  }

  return (
    <div className="mx-auto w-full pl-4 h-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr] h-full">
        <aside className="hidden lg:block">
          <div className="sticky top-16">
            <div className="">
              <ScrollArea className="max-h-[calc(100dvh-16rem)] pt-4">
                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  className={cn(
                    "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    selectedCategoryId === "all"
                      ? "bg-white/5 text-white"
                      : "text-white/30 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span>All</span>
                    <span className="tabular-nums text-xs text-white/60">
                      {iconEntries.length.toLocaleString()}
                    </span>
                  </span>
                </button>

                <div className="mt-2 space-y-1">
                  {ICON_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedCategoryId === category.id
                          ? "bg-white/5 text-white"
                          : "text-white/30 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span>{category.label}</span>
                        <span className="tabular-nums text-xs text-white/60">
                          {categoryCounts[category.id].toLocaleString()}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </aside>

        <main className="min-w-0 border-l border-white/5">
          <div className="hide-scrollbar">
            <IconsList filteredIcons={visibleIcons} loadMoreRef={ref} />
            {!hasMore && filteredIcons.length > 0 && (
              <div className="py-10 text-center text-xs text-white/50">
                End of results.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-6 text-white/60">Loading…</div>}>
      <DashboardContent />
    </Suspense>
  );
}