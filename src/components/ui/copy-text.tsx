"use client";

import { IconCheckmark, IconPaperclip } from "symbols-react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export function CopyText({ value }: { value: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="group inline-flex items-center ring-1 ring-foreground/10 hover:ring-foreground/20 bg-foreground/5 rounded-2xl p-2 px-4 gap-2"
    >
      <span className="text-xs font-mono text-foreground/50 group-hover:text-foreground/70 transition-all duration-150 ease-in-out">{value}</span>
      {copied ? (
        <IconCheckmark className="w-3 h-3 fill-green-500 scale-in" />
      ) : (
        <IconPaperclip className="w-3.5 h-3.5 fill-foreground/50 group-hover:fill-foreground/70 scale-in" />
      )}
    </button>
  );
}