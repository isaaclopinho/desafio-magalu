import React, { ReactElement } from 'react';

import { CharacterContextProvider } from './characters';

type GlobalContextProps = {
  children: ReactElement;
};

function GlobalContext({ children }: GlobalContextProps): JSX.Element {
  return <CharacterContextProvider>{children}</CharacterContextProvider>;
}

export default GlobalContext;
