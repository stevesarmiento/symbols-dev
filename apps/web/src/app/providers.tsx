'use client'

import * as React from 'react'
import { ThemeProvider } from '@/components/ui/theme-provicer'
import { QueryProvider } from '@/providers/query-provider'
import { FrameworkProvider } from '@/context/framework-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { FavoritesSheetProvider } from '@/components/FavoritesSheet'
interface AppProvidersProps {
  children: React.ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <FrameworkProvider>
        <FavoritesSheetProvider>
          <TooltipProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </TooltipProvider>
        </FavoritesSheetProvider>
      </FrameworkProvider>
    </QueryProvider>
  )
}