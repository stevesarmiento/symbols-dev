'use client'

import { CommandSearch } from '@/components/CommandSearch';
import { useSearchParams } from 'next/navigation'; // To get URL params

export default function HomePage() {
  const searchParams = useSearchParams();
  // Read 'search' query parameter from URL, default to empty string if not present
  const initialSearchFromUrl = searchParams.get('search') || "";

  return (
    <main className="flex w-full min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-zinc-950 motion-preset-blur-up-md motion-preset-fade-md motion-scale-in-90 motion-ease-spring-snappy motion-duration-150">
      <div className="w-full max-w-2xl px-4">
        <CommandSearch initialValue={initialSearchFromUrl} />
      </div>
    </main>
  );
}
