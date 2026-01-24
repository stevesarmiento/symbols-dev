'use client'

import { Suspense } from 'react';
import { CommandSearch } from '@/components/CommandSearch';
import { useSearchParams } from 'next/navigation'; // To get URL params
import BackgroundIconGrid from '../components/BackgroundIconGrid';

function HomeContent() {
  const searchParams = useSearchParams();
  // Read 'search' query parameter from URL, default to empty string if not present
  const initialSearchFromUrl = searchParams.get('search') || "";

  return (
    <>
      <BackgroundIconGrid />
      <main className="relative flex w-full min-h-[calc(100dvh-10rem)] flex-col items-center justify-center motion-preset-blur-up-md motion-preset-fade-md motion-scale-in-90 motion-ease-spring-snappy motion-duration-150">
        <div className="w-full max-w-2xl px-4">
          <CommandSearch initialValue={initialSearchFromUrl} />
        </div>
      </main>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
