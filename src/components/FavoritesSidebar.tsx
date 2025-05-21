"use client";

import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import { useFavorites } from "@/stores/favorites";
import { IconStarFill } from "symbols-react";

export function FavoritesSidebar() {
  const { favorites } = useFavorites();

  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader className="flex flex-row items-center gap-2">
        <IconStarFill className="h-5 w-5 fill-yellow-400" />
        <h2 className="text-lg font-semibold">Favorites</h2>
      </SidebarHeader>
      <SidebarContent>
        <ul className="space-y-2 p-2">
          {Array.from(favorites).map((iconName: string) => (
            <li key={iconName} className="text-sm">
              {iconName.replace('Icon', '')}
            </li>
          ))}
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}