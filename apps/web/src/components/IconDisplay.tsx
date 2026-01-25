import React from "react";
import { IconHeader } from "@/components/IconHeader";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

interface IconDisplayProps {
  iconName: string;
  IconComponent: React.ComponentType<IconProps>;
  size: number;
  fillColor: string;
}

export function IconDisplay({ iconName, IconComponent, size, fillColor }: IconDisplayProps) {
  return (
    <div className="h-[calc(100dvh-6rem)]">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-10">
        {/* Anchor the frame to the content box (so it doesn't drift) */}
        <div className="relative px-12 py-10">
          {/* Frame lines: positioned at the content box edges, but extend full width/height */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[200vmax] -translate-x-1/2 text-white/10"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[200vmax] -translate-x-1/2 text-white/10"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 w-px h-[200vmax] -translate-y-1/2 text-white/10"
            viewBox="0 0 1 100"
            preserveAspectRatio="none"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 w-px h-[200vmax] -translate-y-1/2 text-white/10"
            viewBox="0 0 1 100"
            preserveAspectRatio="none"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Centered icon content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <IconHeader iconName={iconName} />

            <div
              className="group inline-flex items-center justify-center overflow-hidden rounded-[60px] border border-zinc-800/50 bg-neutral-800/30 p-4 shadow-lg cursor-pointer corner-squircle"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1.5px)",
                backgroundSize: "32px 32px",
              }}
            >
              <IconComponent
                width={size}
                height={size}
                fill={fillColor}
                className="transition-all duration-300 group-hover:scale-110 active:scale-100 transition-all duration-75 ease-in-out p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}