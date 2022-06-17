import { CharacterType } from 'services/characters/types';

export const favoriteKey = 'FAVORITES';

export const maxFavorites = 5;

type FavoriteCharacterProps = {
  character: CharacterType;
};

export const getFavorites = (): CharacterType[] => {
  const favoriteString = localStorage.getItem(favoriteKey);
  const characters: CharacterType[] = favoriteString
    ? JSON.parse(favoriteString)
    : [];

  return characters;
};

export const favoriteCharacter = ({
  character,
}: FavoriteCharacterProps): {
  characters: CharacterType[];
  limitReached: boolean;
} => {
  let characters = getFavorites();

  if (characters.find((x) => x.id === character.id)) {
    characters = characters.filter((x) => x.id !== character.id);
  } else {
    if (characters.length >= maxFavorites) {
      return { characters, limitReached: true };
    }

    characters.push(character);
  }

  localStorage.setItem(favoriteKey, JSON.stringify(characters));

  return { characters, limitReached: false };
};
