"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { IconCheckmarkCircleFill } from "symbols-react";
import { IconHeader } from "@/components/IconHeader";
import { ComponentViewer } from "@/components/ComponentView";

interface IconDetailActionsProps {
  iconName: string;
  componentCode: string;
  children: ReactNode;
}

export function IconDetailActions({
  iconName,
  componentCode,
  children,
}: IconDetailActionsProps) {
  const [hasCopiedIconName, setHasCopiedIconName] = useState(false);
  const [hasCopiedComponent, setHasCopiedComponent] = useState(false);

  const handleCopyIconName = useCallback(() => {
    navigator.clipboard.writeText(iconName);
    setHasCopiedIconName(true);
    window.setTimeout(() => setHasCopiedIconName(false), 1000);

    toast(
      <div className="inline-flex items-center gap-2">
        <IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">You copied</span>{" "}
          {iconName.replace("Icon", "")}{" "}
          <span className="opacity-50">to clipboard</span>
        </p>
      </div>,
    );
  }, [iconName]);

  const handleCopyComponent = useCallback(() => {
    navigator.clipboard.writeText(componentCode);
    setHasCopiedComponent(true);
    window.setTimeout(() => setHasCopiedComponent(false), 2000);

    toast(
      <div className="inline-flex items-center gap-2">
        <IconCheckmarkCircleFill className="fill-green-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">Copied</span> React snippet{" "}
          <span className="opacity-50">to clipboard</span>
        </p>
      </div>,
    );
  }, [componentCode]);

  return (
    <>
      <IconHeader
        iconName={iconName}
        copied={hasCopiedIconName}
        onCopy={handleCopyIconName}
      />
      {children}
      <ComponentViewer
        iconName={iconName}
        componentCode={componentCode}
        copiedComponent={hasCopiedComponent}
        onCopyComponent={handleCopyComponent}
      />
    </>
  );
}

