"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useFavorites } from "@/stores/favorites";
import { IconStarFill } from "symbols-react";
import { Button } from "./ui/button";

export function FavoritesSheet() {
  const { favorites } = useFavorites();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-white/10">
          <IconStarFill className="h-5 w-5 fill-yellow-400" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-zinc-900">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Favorites</h2>
          <ul className="space-y-2">
            {Array.from(favorites).map((id) => (
              <li key={id} className="text-sm">
                Icon ID: {id}
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}