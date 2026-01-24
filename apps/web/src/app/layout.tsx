import './globals.css'
import { type Metadata } from 'next'
import { geistSans, geistMono } from '@/lib/fonts'
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";
import { AppProviders } from './providers'
import NavBar from '@/components/NavBar';
import { FavoritesSidebar } from "@/components/FavoritesSidebar";
import { Footer } from '@/components/Footer'
import Script from 'next/script';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export const metadata: Metadata = {
  title: "Symbols",
  description: "Open source SF symbols for the web.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const shouldLoadReactScan =
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_REACT_SCAN === "true";

  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        {plausibleDomain ? <PlausibleProvider domain={plausibleDomain} /> : null}
        {shouldLoadReactScan ? (
          <Script
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src="https://unpkg.com/react-scan/dist/auto.global.js"
          />
        ) : null}
      </head>
      <body className="bg-zinc-950 w-full h-full relative">
        <AppProviders>
          <ProgressiveBlur
            className="pointer-events-none fixed left-[25%] top-0 rotate-180 z-10 h-[12%] w-[50%] rounded-t-full"
            blurIntensity={4}
          />
          <div className="max-w-lg w-full mx-auto min-h-dvh flex flex-col bg-transparent relative">
            <NavBar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <FavoritesSidebar />
        </AppProviders>
      </body>
    </html>
  )
}