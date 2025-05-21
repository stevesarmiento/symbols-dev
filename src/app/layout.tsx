import './globals.css'
import { type Metadata } from 'next'
import { geistSans, geistMono } from '@/lib/fonts'
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";
import { AppProviders } from './providers'
import NavBar from '@/components/NavBar';
import { FavoritesSidebar } from "@/components/FavoritesSidebar";
import { Footer } from '@/components/Footer'

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
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <PlausibleProvider domain="url goes here" />
      </head>
      <body className="bg-zinc-950 w-full h-full">
        <AppProviders>
          <div className="max-w-lg w-full mx-auto min-h-screen flex flex-col">
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