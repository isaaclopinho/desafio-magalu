import React, { createContext, ReactElement, useMemo, useState } from 'react';
import { CharacterType } from 'services/characters/types';

type CharacterContextProps = {
  state: CharacterType | null;
  setState: React.Dispatch<React.SetStateAction<CharacterType | null>>;
};

type CharacterContextProviderProps = {
  children: ReactElement;
};

const DEFAULT_CONTEXT = {
  state: null,
  setState: () => null,
};

const CharacterContext = createContext<CharacterContextProps>(DEFAULT_CONTEXT);

function CharacterContextProvider({
  children,
}: CharacterContextProviderProps): JSX.Element {
  const [state, setState] = useState<CharacterType | null>(
    DEFAULT_CONTEXT.state
  );

  const value = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterContextProvider };

export default CharacterContext;
