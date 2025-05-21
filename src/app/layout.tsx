import './globals.css'
import { type Metadata } from 'next'
import { geistSans, geistMono } from '@/lib/fonts'
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";
import { AppProviders } from './providers'
import NavBar from '@/components/NavBar';

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
        <AppProviders>
          <NavBar />
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  )
}