"use client";

import React from 'react';
import { IconTypescriptLogo, IconPaperclip, IconCheckmark } from 'symbols-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface FolderTabProps {
  iconName: string;
  copiedComponent: boolean;
  onCopyComponent: () => void;
}

export function FolderTab({ iconName, copiedComponent, onCopyComponent }: FolderTabProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between p-3 py-0 relative">
        {/* Folder tab effect */}
        <div className="bottom-0 left-[-12px] relative">
          {/* Main tab content */}
          <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-t-xl border-t border-zinc-700 relative z-20">
            <IconTypescriptLogo className="w-4 h-4 fill-blue-400" />
            <span className="text-sm text-white/40 font-berkeley-mono">
              {iconName.length > 16 ? `${iconName.slice(0, 16)}...` : iconName}.tsx
            </span>
          </div>
          
          {/* Right diagonal side */}
          <div 
            className="absolute top-0 -right-[8px] w-8 h-full bg-zinc-800 border-t border-zinc-700 z-10"
            style={{
              transform: 'skew(25deg)',
              borderRadius: '0 10px 0 0'
            }}
          />
          
          {/* Right curved corner */}
          <div 
            className="absolute bottom-0 -right-[30px] h-[9px] w-[16px] rounded-bl-[30px] z-0"
            style={{
              boxShadow: '-7px 7px 0 7px rgb(39 39 42)' // zinc-800 color
            }}
          />
        </div>
        
        {/* Copy button positioned in the tab area */}
        <div className="ml-auto">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label="Copy React snippet"
                onClick={onCopyComponent}
                className="absolute top-[-5px] right-0 flex items-center justify-center h-8 w-8 hover:bg-zinc-800 rounded-lg"
              >
                {copiedComponent ? (
                  <IconCheckmark className="fill-green-500 scale-in w-4 h-4" width={16} height={16} />
                ) : (
                  <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in w-5 h-5" width={16} height={16} />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-zinc-900">
              <p className="text-white text-xs">Copy component</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}