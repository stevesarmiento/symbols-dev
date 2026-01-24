"use client";

import React from 'react';
import { IconCheckmark, IconPaperclip } from 'symbols-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FavoritesButton } from "@/components/FavoritesButton";
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IconHeaderProps {
  iconName: string;
  copied: boolean;
  onCopy: () => void;
}

export function IconHeader({ iconName, copied, onCopy }: IconHeaderProps) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-xs font-berkeley-mono">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-white/30 hover:text-white/60">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white/20" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard" className="text-white/30 hover:text-white/60">
                Categories
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white/20" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white/50">
              {iconName.replace('Icon', '')}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="h-[1px] bg-white/5 my-3 scale-x-120" />

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
                type="button"
                aria-label="Copy icon name"
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