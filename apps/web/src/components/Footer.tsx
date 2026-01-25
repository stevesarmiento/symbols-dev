"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { version as symbolsVersion } from "symbols-react/package.json"

import { Badge } from "@/components/ui/badge"

export function Footer() {
  const pathname = usePathname();
  const isDashboardChrome =
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/") ||
    pathname.startsWith("/icon/");

  if (isDashboardChrome) return null;

  return (
    <footer className="w-full max-w-lg mx-auto py-6">
      <div className="flex justify-between items-center text-xs font-berkeley-mono text-white/50">
        <div>
            <span className="text-zinc-500">Built by{' '}</span>
            <Link 
              href="https://x.com/stevensarmi_" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              @stevensarmi_
            </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/stevesarmiento/symbols-dev/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            MIT Licensed
          </Link>
          <Badge className="rounded-md border-white/10 bg-white/5 hover:bg-white/10 cursor-crosshair px-2 py-0.5 text-[10px] font-medium text-white/60">
            v{symbolsVersion}
          </Badge>
        </div>
      </div>
    </footer>
  )
}