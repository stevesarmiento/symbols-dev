"use client";

import { usePathname } from "next/navigation";

import { DashboardNavBar } from "@/components/DashboardNavBar";
import { HomeNavBar } from "@/components/HomeNavBar";

function isDashboardChromePathname(pathname: string) {
  return (
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/") ||
    pathname.startsWith("/icon/")
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const isDashboardChrome = isDashboardChromePathname(pathname);

  return isDashboardChrome ? <DashboardNavBar /> : <HomeNavBar />;
}