"use client";

import type { ComponentProps, ReactNode } from "react";
import { IconBookmarkFill } from "symbols-react";

import { FavoritesSidebar } from "@/components/FavoritesSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface FavoritesSheetProviderProps {
  children: ReactNode;
}

export function FavoritesSheetProvider({ children }: FavoritesSheetProviderProps) {
  return (
    <Sheet>
      {children}
      <FavoritesSidebar />
    </Sheet>
  );
}

interface FavoritesSheetTriggerProps {
  label: string;
  tooltipSide?: ComponentProps<typeof TooltipContent>["side"];
  className?: string;
}

export function FavoritesSheetTrigger({
  label,
  tooltipSide = "bottom",
  className,
}: FavoritesSheetTriggerProps) {
  return (
    <Tooltip delayDuration={0}>
      <SheetTrigger asChild>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={label}
            className={cn(
              "group h-7 w-7 bg-zinc-900/0 hover:bg-white/10 active:scale-[0.98] transition-all duration-150",
              className,
            )}
          >
            <IconBookmarkFill className="size-4 fill-white/40 group-hover:fill-indigo-400" />
            <span className="sr-only">{label}</span>
          </Button>
        </TooltipTrigger>
      </SheetTrigger>
      <TooltipContent side={tooltipSide} className="bg-zinc-900 text-xs text-white">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}