import { Typography } from 'components/atoms';
import { ComicCard } from 'components/molecules/ComicCard';
import React, { memo } from 'react';
import { ComicType } from 'services/characters/types';
import styles from './ComicsList.module.scss';

export interface ComicsListProps {
  data: ComicType[];
  textEmpty: string;
}

function ComicsListComponent({
  data,
  textEmpty,
}: ComicsListProps): JSX.Element {
  return data.length > 0 ? (
    <div className={styles.main}>
      {data.map((comic) => (
        <ComicCard
          key={comic.id}
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          title={comic.title}
        />
      ))}
    </div>
  ) : (
    <Typography type="p1" weight="semibold">
      {textEmpty}
    </Typography>
  );
}

const propsAreEqual = (
  prevProps: ComicsListProps,
  nextProps: ComicsListProps
): boolean => {
  const propsToCompare: Array<keyof ComicsListProps> = ['data', 'textEmpty'];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const ComicsList = memo(ComicsListComponent, propsAreEqual);
