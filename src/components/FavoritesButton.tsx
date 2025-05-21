"use client";

import { useFavorites, useFavoritesHydration } from "@/stores/favorites";
import { IconStar, IconStarFill, IconStarSlashFill } from "symbols-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface FavoritesButtonProps {
  iconName: string;
}

export function FavoritesButton({ iconName }: FavoritesButtonProps) {
  const hasHydrated = useFavoritesHydration();
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFavorited = hasHydrated && isFavorite(iconName);
  const [showSlash, setShowSlash] = useState(false);

  useEffect(() => {
    if (!isFavorited && showSlash) {
      const timeout = setTimeout(() => setShowSlash(false), 900);
      return () => clearTimeout(timeout);
    }
  }, [isFavorited, showSlash]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorited) {
      setShowSlash(true);
    }
    toggleFavorite(iconName);
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button
          onClick={handleClick}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="z-10 rounded-full bg-primary-900/0 p-1.5 transition-colors dark:bg-primary-50/5"
        >
          <AnimatePresence mode="wait">
            {!hasHydrated ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
              >
                <IconStar className="h-6 w-6 stroke-zinc-400" />
              </motion.div>
            ) : showSlash ? (
              <motion.div
                key="slash"
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{
                  rotate: 0,
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                    mass: 0.3,
                }}
              >
                <IconStarSlashFill className="h-6 w-6 fill-zinc-400" />
              </motion.div>
            ) : isFavorited ? (
              <motion.div
                key="filled"
                initial={{ scale: 1, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 1.1, rotate: -20 }}
              >
                <IconStarFill className="h-6 w-6 fill-yellow-500" />
              </motion.div>
            ) : (
              <motion.div
                key="star"
                initial={{ scale: 1, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 1.1, rotate: 20 }}
              >
                <IconStarFill className="h-6 w-6 fill-zinc-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </TooltipTrigger>
      <TooltipContent className="bg-gray-800">
        <p className="text-white text-xs">
          {isFavorited ? "Remove from favorites" : "Add to favorites"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
