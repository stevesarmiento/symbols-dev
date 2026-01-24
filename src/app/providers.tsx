'use client'

import * as React from 'react'
import { RootProvider } from 'fumadocs-ui/provider/next'
import { ThemeProvider } from '@/components/ui/theme-provicer'
import { QueryProvider } from '@/providers/query-provider'
import { FrameworkProvider } from '@/context/framework-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'
interface AppProvidersProps {
  children: React.ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <RootProvider>
      <QueryProvider>
        <FrameworkProvider>
          <SidebarProvider>
            <TooltipProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </TooltipProvider>            
          </SidebarProvider>
        </FrameworkProvider>
      </QueryProvider>
    </RootProvider>
  )
}