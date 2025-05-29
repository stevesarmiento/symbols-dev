"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { IconCheckmark, IconPaperclip } from 'symbols-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FavoritesButton } from "@/components/FavoritesButton";

interface IconHeaderProps {
  iconName: string;
  copied: boolean;
  onCopy: () => void;
}

export function IconHeader({ iconName, copied, onCopy }: IconHeaderProps) {
  const router = useRouter();

  return (
    <>
      <button 
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5"/>
          <path d="M12 19l-7-7 7-7"/>
        </svg>
        Keep Searching
      </button>

      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold break-all text-white">
            {iconName.replace('Icon', '')}
          </h1>
          <p className="text-white/30 mb-8">{iconName}</p>
        </div>
        <div className="flex gap-2">
          <FavoritesButton iconName={iconName} />
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                className="group flex items-center justify-center w-10 h-10 rounded-lg p-0 transition-all duration-150 ease-in-out hover:bg-white/10 hover:scale-95"
                onClick={onCopy}
              >
                {copied ? (
                  <IconCheckmark className="fill-green-500 scale-in w-4.5 h-4.5" width={16} height={16} />
                ) : (
                  <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in w-6 h-6" width={16} height={16} />
                )}
              </button>
            </TooltipTrigger> 
            <TooltipContent className="bg-zinc-900">
              <p className="text-white text-xs">Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </>
  );
}