"use client"

import React from 'react'
import Link from 'next/link'
import { IconFlaskFill } from 'symbols-react'

export function Footer() {
  return (
    <footer className="w-full max-w-lg mx-auto py-6">
      <div className="flex justify-between items-center text-sm font-mono text-white/50">
        <div className="flex items-center gap-x-2">
          <Link 
            href="/lab"
            className="hover:text-white transition-colors"
          >
            <IconFlaskFill className="w-3 h-3 fill-white/50 hover:fill-indigo-300" />
          </Link>
          <span className="text-zinc-600">|</span>
          <span>{new Date().getFullYear()}</span>
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