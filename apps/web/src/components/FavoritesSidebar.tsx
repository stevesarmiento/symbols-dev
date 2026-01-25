"use client";

import { useState, useMemo } from "react";
import { SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useFavorites, useFavoritesHydration } from "@/stores/favorites";
import { IconTrash, IconPaperclip, IconCheckmark } from "symbols-react";
import * as Icons from "symbols-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function FavoritesSidebar() {
  const { favorites, toggleFavorite } = useFavorites();
  const hasHydrated = useFavoritesHydration();
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const router = useRouter();

  const filteredFavorites = useMemo(() => {
    if (!hasHydrated) return [];
    
    const favoritesArray = Array.from(favorites).filter((item): item is string => typeof item === 'string');
    if (!searchTerm) return favoritesArray;
    
    return favoritesArray.filter(iconName =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      iconName.replace('Icon', '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [favorites, searchTerm, hasHydrated]);

  const handleCopyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
    
    toast(
      <div className="inline-flex items-center gap-2">
        <IconCheckmark className="fill-green-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">Copied</span> {iconName} <span className="opacity-50">to clipboard</span>
        </p>
      </div>
    );
  };

  const handleRemoveFromFavorites = (iconName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(iconName);
    
    toast(
      <div className="inline-flex items-center gap-2">
        <IconTrash className="fill-red-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">Removed</span> {iconName.replace('Icon', '')} <span className="opacity-50">from favorites</span>
        </p>
      </div>
    );
  };

  const handleIconClick = (iconName: string) => {
    router.push(`/icon/${iconName}`);
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string; width?: number; height?: number; }>;
    return IconComponent;
  };

  return (
    <SheetContent
      side="right"
      className="w-[24rem] border-zinc-800 bg-zinc-950 p-0 text-white sm:max-w-[24rem]"
    >
      <SheetTitle className="sr-only">Favorites</SheetTitle>
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex flex-col gap-3 border-b border-zinc-800 p-3 pr-12">
          <div className="relative">
            <Input
              placeholder="Search favorites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={!hasHydrated || favorites.size === 0}
              className="h-8 border rounded-lg border-zinc-800 bg-zinc-950 shadow-none transition-all duration-300 focus-within:border-zinc-700 focus-within:bg-zinc-900 focus-within:ring-4 focus-within:ring-zinc-400/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:focus-within:ring-0"
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-2">
          {!hasHydrated ? (
            <div className="p-4 text-center text-muted-foreground ">
              Loading favorites...
            </div>
          ) : favorites.size === 0 ? (
            <div className="flex flex-col items-center justify-center pt-16 text-center text-muted-foreground">
              <Icons.IconBookmarkFill className="h-8 w-8 mx-auto mb-2 fill-white/20" />
              <p className="text-md font-diatype-medium">No bookmarks yet</p>
              <p className="text-xs mt-1 font-berkeley-mono text-pretty opacity-50">Click the bookmark on any <br />icon to add it here</p>
            </div>
          ) : filteredFavorites.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              <p className="text-sm">No favorites match your search</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredFavorites.map((iconName: string) => {
                const IconComponent = getIconComponent(iconName);

                return (
                  <li key={iconName} className="group/menu-item relative">
                    <SheetClose asChild>
                      <button
                        type="button"
                        onClick={() => handleIconClick(iconName)}
                        className="group w-full rounded-xl p-3 pr-16 text-left hover:bg-zinc-800/30 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 w-full">
                          {IconComponent && (
                            <div className="flex-shrink-0">
                              <IconComponent
                                className="h-5 w-5 fill-current transition-colors duration-200 group-hover:fill-zinc-200"
                                width={20}
                                height={20}
                              />
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <p className="truncate text-xs text-zinc-400 transition-colors duration-200 group-hover:text-white">
                              {iconName.replace("Icon", "")}
                            </p>
                          </div>
                        </div>
                      </button>
                    </SheetClose>

                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 transition-opacity duration-150 group-hover/menu-item:opacity-100 group-focus-within/menu-item:opacity-100">
                      <button
                        type="button"
                        aria-label="Copy icon name"
                        className="inline-flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyIconName(iconName);
                        }}
                      >
                        {copiedIcon === iconName ? (
                          <IconCheckmark className="h-3 w-3 fill-green-500" />
                        ) : (
                          <IconPaperclip className="h-3 w-3 fill-zinc-400 transition-colors duration-200" />
                        )}
                      </button>

                      <button
                        type="button"
                        aria-label="Remove from favorites"
                        className="inline-flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:bg-red-500/10"
                        onClick={(e) => handleRemoveFromFavorites(iconName, e)}
                      >
                        <IconTrash className="h-3.5 w-3.5 fill-zinc-400 transition-colors duration-200" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </SheetContent>
  );
}