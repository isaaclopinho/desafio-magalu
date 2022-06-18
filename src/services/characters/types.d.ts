export type CollectionType = {
  available: number;
  returned: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
  }[];
};

export type CharacterType = {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics?: CollectionType;
  series?: CollectionType;
  stories?: CollectionType;
};

export type DateObject = {
  type: string;
  date: string;
};

export type ComicType = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  pageCount: number;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: DateObject[];
};

export type GetCharacterType = {
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

export type GetComicsByCharacterIdType = {
  id: number;
  limit?: number;
  offset?: number;
};

export type GetComicsByCharacterIdReturnType = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  status: string;
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: ComicType[];
  };
};
