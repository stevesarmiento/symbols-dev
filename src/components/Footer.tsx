"use client"

import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full max-w-lg mx-auto py-6">
      <div className="flex justify-between items-center text-sm font-mono text-white/50">
        <div>
          <Link href="https://github.com/stevesarmiento/symbols-dev/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            {new Date().getFullYear()}
          </Link>
        </div>
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
      </div>
    </footer>
  )
}