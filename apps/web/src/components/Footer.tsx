"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

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
        <div>
          <Link href="https://github.com/stevesarmiento/symbols-dev/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            MIT Licensed
          </Link>
        </div>
      </div>
    </footer>
  )
}