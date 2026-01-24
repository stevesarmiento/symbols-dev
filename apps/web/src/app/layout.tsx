import './globals.css'
import { type Metadata } from 'next'
import localFont from 'next/font/local'
import PlausibleProvider from 'next-plausible'
import { Suspense } from "react";
import { Toaster } from "sonner";
import { AppProviders } from './providers'
import NavBar from '@/components/NavBar';
import { FavoritesSidebar } from "@/components/FavoritesSidebar";
import { Footer } from '@/components/Footer'
import Script from 'next/script';

const abcDiatype = localFont({
  src: [
    {
      path: '../fonts/ABCDiatype-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ABCDiatype-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ABCDiatype-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-abc-diatype',
  display: 'swap',
});

const abcDiatypeMono = localFont({
  src: [
    {
      path: '../fonts/ABCDiatypeMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ABCDiatypeMono-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-abc-diatype-mono',
  display: 'swap',
});

const berkeleyMono = localFont({
  src: [
    {
      path: '../fonts/BerkeleyMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/BerkeleyMono-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/BerkeleyMono-Oblique.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/BerkeleyMono-Bold-Oblique.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-berkeley-mono',
  display: 'swap',
});

const inter = localFont({
  src: '../fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

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
    <html lang="en" suppressHydrationWarning className={`${abcDiatype.variable} ${abcDiatypeMono.variable} ${berkeleyMono.variable} ${inter.variable} dark`}>
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
          <div className="w-full mx-auto min-h-dvh flex flex-col bg-transparent relative">
            <Suspense fallback={null}>
              <NavBar />
            </Suspense>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="top-center"/>
          <FavoritesSidebar />
        </AppProviders>
      </body>
    </html>
  )
}