import './globals.css'
import { type Metadata } from 'next'
import { RootProvider } from 'fumadocs-ui/provider';
import { geistSans, geistMono } from '@/lib/fonts'
import { ThemeProvider } from '@/components/ui/theme-provicer'
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";
import { baseOptions } from './layout.config'
import { QueryProvider } from '@/providers/query-provider'
import NavBar from '@/components/NavBar';
import { FrameworkProvider } from '@/context/framework-provider';

export const metadata: Metadata = {
  title: "Next Solana Starter",
  description: "Production Ready Solana Starter",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <PlausibleProvider domain="url goes here" />
      </head>
      <body>
        <RootProvider {...baseOptions}>
        <QueryProvider>
          <FrameworkProvider>
            <ThemeProvider>
              <NavBar />
              {children}
            <Toaster />
          </ThemeProvider>
          </FrameworkProvider>
          </QueryProvider>
        </RootProvider>
      </body>
    </html>
  )
}