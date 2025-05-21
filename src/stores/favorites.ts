import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesStore = {
  favorites: Set<string>;
  toggleFavorite: (iconName: string) => void;
  isFavorite: (iconName: string) => boolean;
  _hasHydrated: boolean;
};

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: new Set<string>(),
      _hasHydrated: false,
      toggleFavorite: (iconName) =>
        set((state) => {
          const newFavorites = new Set(state.favorites);
          return { favorites: newFavorites.has(iconName) ? (newFavorites.delete(iconName), newFavorites) : (newFavorites.add(iconName), newFavorites) };
        }),
      isFavorite: (iconName) => get().favorites.has(iconName),
    }),
    {
      name: "favorites-storage", // LocalStorage key
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str)
            return {
              state: { favorites: new Set<string>(), _hasHydrated: true },
            };

          return {
            state: {
              favorites: new Set<string>(JSON.parse(str).favorites),
              _hasHydrated: true,
            },
          };
        },
        setItem: (name, value) => {
          localStorage.setItem(
            name,
            JSON.stringify({
              favorites: Array.from(value.state.favorites),
            }),
          );
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          state._hasHydrated = true;
        }
      },
    },
  ),
);

export const useFavoritesHydration = () => {
  return useFavorites((state) => state._hasHydrated);
};
