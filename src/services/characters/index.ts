/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from 'api';
import { CharacterType } from 'services/types';
import { GenerateParams } from 'utils/generate-hash';

type GetCharacterType = {
  searchTerm: string;
  orderBy: 'name' | 'modified' | '-name' | '-modified';
  limit?: number;
  offset?: number;
};

export type GetCharactersReturnType = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: CharacterType[];
  };
};

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
