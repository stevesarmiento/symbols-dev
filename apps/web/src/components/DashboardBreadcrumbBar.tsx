"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function toDisplayNameFromIconParam(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("Icon")) return trimmed.slice("Icon".length);

  const parts = trimmed
    .split(/[-_ ]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

  return parts.join("");
}

export function DashboardBreadcrumbBar() {
  const pathname = usePathname();
  const params = useParams<{ iconName?: string }>();

  const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  const isIcon = pathname.startsWith("/icon/");

  const iconDisplayName = useMemo(() => {
    if (!isIcon) return "";

    const iconParam = typeof params.iconName === "string" ? params.iconName : "";
    if (!iconParam) return "";

    let decoded = iconParam;
    try {
      decoded = decodeURIComponent(iconParam);
    } catch {
      // ignore
    }

    return toDisplayNameFromIconParam(decoded);
  }, [isIcon, params.iconName]);

  if (!isDashboard && !isIcon) return null;

  return (
    <div className="mx-auto w-full pl-4 pt-3">
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
            {isIcon ? (
              <BreadcrumbLink asChild>
                <Link href="/dashboard" className="text-white/30 hover:text-white/60">
                  Categories
                </Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage className="text-white/50">Categories</BreadcrumbPage>
            )}
          </BreadcrumbItem>

          {isIcon && iconDisplayName ? (
            <>
              <BreadcrumbSeparator className="text-white/20" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white/50">
                  {iconDisplayName}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="h-[1px] bg-white/5 mt-3 scale-x-120" />
    </div>
  );
}

