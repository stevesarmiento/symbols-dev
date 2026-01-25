"use client";

import Link from "next/link";
import { IconHeartFill, IconHeartTextSquare, IconHeartTextSquareFill, IconMagnifyingglass, IconSquareStack3dDownForwardFill } from "symbols-react";

import { FavoritesSheetTrigger } from "@/components/FavoritesSheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import NpmButton from "@/components/NpmButton";

export function HomeNavBar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto min-w-lg pt-12 pb-2">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-full opacity-70 [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'rgba(0,0,0,0.1)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />

      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center">
          <div className="inline-flex items-center">
            <div className="flex size-7 items-center justify-center rounded-lg bg-blue-500 p-1">
              <IconHeartFill className="size-4.5 fill-white" />
            </div>
            <Link className="relative flex items-center" href="/">
              <span className="ml-2 font-berkeley-mono text-xl font-semibold text-white">
                Symbols
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
            <Link
              href="/dashboard"
              className="group flex items-center justify-center size-7 rounded-lg p-0 transition-all duration-150 ease-in-out hover:bg-white/10 hover:scale-95"
            >
                <IconSquareStack3dDownForwardFill className="size-5 fill-white/50 group-hover:fill-blue-400" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-zinc-900 text-xs text-white">
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>
          <div className="h-[20px] w-[2px] rounded-full bg-zinc-800" />
          <FavoritesSheetTrigger label="Bookmarks" tooltipSide="bottom" />
          <div className="h-[20px] w-[2px] rounded-full bg-zinc-800" />
          <NpmButton selectedFramework="react" />
        </div>
      </div>
    </nav>
  );
}

