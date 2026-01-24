"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconCommand, IconHeartFill, IconMagnifyingglass } from "symbols-react";

import NpmButton from "@/components/NpmButton";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function isDashboardShellPathname(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/") || pathname.startsWith("/icon/");
}

function normalizeSearchParam(value: string) {
  return value.trim();
}

function getModifierKey() {
  if (typeof window === "undefined") return "⌘";
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "⌘" : "Ctrl";
}

export function DashboardNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isDashboardShell = useMemo(() => isDashboardShellPathname(pathname), [pathname]);
  const isDashboardRoute = pathname === "/dashboard" || pathname.startsWith("/dashboard/");

  const searchFromUrl = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(searchFromUrl);
  const [modifierKey, setModifierKey] = useState("⌘");

  useEffect(() => {
    setModifierKey(getModifierKey());
  }, []);

  useEffect(() => {
    setSearchInput(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function replaceSearchParam(nextSearch: string) {
    const params = new URLSearchParams(searchParams.toString());
    const normalized = normalizeSearchParam(nextSearch);

    if (normalized) params.set("search", normalized);
    else params.delete("search");

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalized = normalizeSearchParam(searchInput);
    if (isDashboardRoute) {
      replaceSearchParam(normalized);
      return;
    }

    const qs = normalized ? `?search=${encodeURIComponent(normalized)}` : "";
    router.push(`/dashboard${qs}`);
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur">
      <div className="flex w-full items-center gap-0 px-4 py-0 sm:px-6 lg:px-4">
        <Link
          href={isDashboardShell ? "/" : "/"}
          className="flex items-center"
        >
          <div className="flex size-7 items-center justify-center rounded-lg bg-blue-500 p-1">
            <IconHeartFill className="size-4.5 fill-white" />
          </div>
        </Link>

        <div className="h-[50px] w-px bg-white/5 mx-3" />

        <form onSubmit={handleSubmit} className="min-w-0 flex-1">
          <div className="relative w-full">
            <IconMagnifyingglass className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 fill-white/50" />
            <Input
              ref={searchInputRef}
              value={searchInput}
              onChange={(e) => {
                const next = e.target.value;
                setSearchInput(next);
                if (isDashboardRoute) replaceSearchParam(next);
              }}
              placeholder=""
              aria-label="Search icons"
              className={cn(
                "border-0 bg-transparent pl-9 shadow-none focus-visible:ring-0",
                !isDashboardShell && "opacity-60"
              )}
            />
            {!searchInput && (
              <div className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-white/40">
                <span>Press</span>
                <kbd className="inline-flex h-5 items-center rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/50">
                  <IconCommand className="size-2 fill-white/50" />
                </kbd>
                +
                <kbd className="inline-flex h-5 items-center rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/50">
                  K
                </kbd>
                <span>to search…</span>
              </div>
            )}
          </div>
        </form>

        <div className="flex items-center gap-2">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <SidebarTrigger />
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-zinc-900 text-xs text-white">
              <p>Favorites</p>
            </TooltipContent>
          </Tooltip>
          <div className="h-[20px] w-[2px] rounded-full bg-zinc-800" />
          <NpmButton selectedFramework="react" />
        </div>
      </div>
    </nav>
  );
}

