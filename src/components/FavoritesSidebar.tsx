"use client";

import { useState, useMemo } from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useFavorites, useFavoritesHydration } from "@/stores/favorites";
import { IconStarFill, IconTrash, IconPaperclip, IconCheckmark, IconMagnifyingglass } from "symbols-react";
import * as Icons from "symbols-react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function FavoritesSidebar() {
  const { favorites, toggleFavorite } = useFavorites();
  const hasHydrated = useFavoritesHydration();
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const router = useRouter();

  const filteredFavorites = useMemo(() => {
    if (!hasHydrated) return [];
    
    const favoritesArray = Array.from(favorites);
    if (!searchTerm) return favoritesArray;
    
    return favoritesArray.filter(iconName =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      iconName.replace('Icon', '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [favorites, searchTerm, hasHydrated]);

  const handleCopyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
    
    toast(
      <div className="inline-flex items-center gap-2">
        <IconCheckmark className="fill-green-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">Copied</span> {iconName} <span className="opacity-50">to clipboard</span>
        </p>
      </div>
    );
  };

  const handleRemoveFromFavorites = (iconName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(iconName);
    
    toast(
      <div className="inline-flex items-center gap-2">
        <IconTrash className="fill-red-500 w-[16px] h-[16px]" />
        <p>
          <span className="opacity-50">Removed</span> {iconName.replace('Icon', '')} <span className="opacity-50">from favorites</span>
        </p>
      </div>
    );
  };

  const handleIconClick = (iconName: string) => {
    router.push(`/icon/${iconName}`);
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string; width?: number; height?: number; }>;
    return IconComponent;
  };

  return (
    <Sidebar side="right" className="bg-zinc-950 border border-zinc-800">
      <SidebarHeader className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <IconStarFill className="h-5 w-5 fill-yellow-400" />
          <h2 className="text-lg font-semibold text-white">Favorites</h2>
        </div>
        
        {hasHydrated && favorites.size > 0 && (
          <div className="relative">
            <IconMagnifyingglass className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-zinc-200" />
            <SidebarInput
              placeholder="Search favorites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        )}
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        {!hasHydrated ? (
          <div className="p-4 text-center text-muted-foreground ">
            Loading favorites...
          </div>
        ) : favorites.size === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            <IconStarFill className="h-8 w-8 mx-auto mb-2 fill-muted-foreground/50" />
            <p className="text-sm">No favorites yet</p>
            <p className="text-xs mt-1">Click the star on any icon to add it here</p>
          </div>
        ) : filteredFavorites.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            <p className="text-sm">No favorites match your search</p>
          </div>
        ) : (
          <SidebarMenu>
            {filteredFavorites.map((iconName: string) => {
              const IconComponent = getIconComponent(iconName);
              
              return (
                <SidebarMenuItem key={iconName}>
                  <SidebarMenuButton
                    onClick={() => handleIconClick(iconName)}
                    className="group/item relative h-auto p-3 hover:bg-zinc-800/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 w-full">
                      {IconComponent && (
                        <div className="flex-shrink-0">
                          <IconComponent 
                            className="h-5 w-5 fill-current group-hover/item:fill-zinc-200 transition-colors duration-200" 
                            width={20} 
                            height={20} 
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-400 group-hover/item:text-white transition-colors duration-200 truncate">{iconName}</p>
                      </div>
                      
                      <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity motion-preset-blur-left-lg">
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 hover:bg-sidebar-accent-foreground/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyIconName(iconName);
                              }}
                            >
                              {copiedIcon === iconName ? (
                                <IconCheckmark className="h-3 w-3 fill-green-500" />
                              ) : (
                                <IconPaperclip className="h-3 w-3 fill-zinc-400 group-hover/item:fill-zinc-200 transition-colors duration-200" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="relative bg-zinc-800 border-0 p-0">
                            <div className="relative z-10 px-3 py-2">
                              <p className="text-white text-xs font-mono">Copy icon name</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                        
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 hover:bg-red-500/10"
                              onClick={(e) => handleRemoveFromFavorites(iconName, e)}
                            >
                              <IconTrash className="h-3.5 w-3.5 fill-zinc-400 group-hover/item:fill-rose-500 transition-colors duration-200" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="relative bg-zinc-800 border-0 p-0">
                            <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md rounded-md -z-10"></div>
                            <div className="relative z-10 px-3 py-2">
                              <p className="text-white text-xs font-mono">Remove from favorites</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        )}
      </SidebarContent>
    </Sidebar>
  );
}