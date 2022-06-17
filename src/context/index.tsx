import React, { ReactElement } from 'react';

import { CharacterContextProvider } from './characters';
import { FavoriteContextProvider } from './favorites';

type GlobalContextProps = {
  children: ReactElement;
};

function GlobalContext({ children }: GlobalContextProps): JSX.Element {
  return (
    <FavoriteContextProvider>
      <CharacterContextProvider>{children}</CharacterContextProvider>
    </FavoriteContextProvider>
  );
}

export default GlobalContext;
