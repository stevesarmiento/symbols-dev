"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";
import { IconCheckmark, IconCheckmarkCircleFill, IconPaperclip } from "symbols-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FavoritesButton } from "@/components/FavoritesButton";

interface IconHeaderProps {
  iconName: string;
}

export function IconHeader({ iconName }: IconHeaderProps) {
  const [hasCopiedIconName, setHasCopiedIconName] = useState(false);

  const handleCopyIconName = useCallback(() => {
    navigator.clipboard.writeText(iconName);
    setHasCopiedIconName(true);
    window.setTimeout(() => setHasCopiedIconName(false), 1000);

    toast(
      <div className="inline-flex items-center gap-2">
        <IconCheckmarkCircleFill className="h-4 w-4 fill-green-500" />
        <p>
          <span className="opacity-50">You copied</span>{" "}
          {iconName.replace("Icon", "")}{" "}
          <span className="opacity-50">to clipboard</span>
        </p>
      </div>,
    );
  }, [iconName]);

  return (
    <>
      <div className="flex w-full justify-between items-start mb-0">
        <div className="flex flex-col">
          <h1 className="text-lg font-diatype-bold break-all text-white">
            {iconName.replace('Icon', '')}
          </h1>
          <p className="text-white/30 mb-8 text-xs font-berkeley-mono">{iconName}</p>
        </div>
        <div className="flex gap-1">
          <FavoritesButton iconName={iconName} />
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label="Copy icon name"
                className="group flex items-center justify-center size-7 rounded-lg p-0 transition-all duration-150 ease-in-out hover:bg-white/10 hover:scale-95"
                onClick={handleCopyIconName}
              >
                {hasCopiedIconName ? (
                  <IconCheckmark className="fill-green-500 scale-in size-4" />
                ) : (
                  <IconPaperclip className="fill-white/50 group-hover:-rotate-[10deg] scale-in size-5" width={16} height={16} />
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