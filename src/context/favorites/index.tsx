import React, { createContext, ReactElement, useMemo, useState } from 'react';
import { CharacterType } from 'services/characters/types';
import { getFavorites } from 'services/favorites';

type FavoritesContextProps = {
  favorites: CharacterType[];
  setFavorites: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};

type FavoritesContextProviderProps = {
  children: ReactElement;
};

const DEFAULT_CONTEXT = {
  favorites: [],
  setFavorites: () => null,
};

const FavoritesContext = createContext<FavoritesContextProps>(DEFAULT_CONTEXT);

function FavoriteContextProvider({
  children,
}: FavoritesContextProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<CharacterType[]>(getFavorites());

  const value = useMemo(
    () => ({ favorites, setFavorites }),
    [favorites, setFavorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoriteContextProvider };

export default FavoritesContext;
