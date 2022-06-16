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
