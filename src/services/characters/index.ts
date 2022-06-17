/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from 'api';
import {
  GetCharacterType,
  GetComicsByCharacterIdType,
} from 'services/characters/types';
import { GenerateParams } from 'utils/generate-hash';

export const GetCharacters = async ({
  searchTerm,
  orderBy,
  limit,
  offset,
}: GetCharacterType): Promise<any> => {
  try {
    const params = GenerateParams({
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      privateKey: process.env.REACT_APP_MARVEL_API_PRIVATE_KEY,
    });

    const response = await Api.getInstance().get('/v1/public/characters', {
      params: { ...params, nameStartsWith: searchTerm, orderBy, limit, offset },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetComicsByCharacterId = async ({
  id,
  limit,
  offset,
}: GetComicsByCharacterIdType): Promise<any> => {
  try {
    const params = GenerateParams({
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      privateKey: process.env.REACT_APP_MARVEL_API_PRIVATE_KEY,
    });

    const response = await Api.getInstance().get(
      `/v1/public/characters/${id}/comics`,
      {
        params: { ...params, orderBy: 'onsaleDate', limit, offset },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
