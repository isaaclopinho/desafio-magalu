import { Typography } from 'components/atoms';
import React, { memo } from 'react';
import styles from './ComicCard.module.scss';

export interface ComicCardProps {
  src: string;
  title: string;
}

function ComicCardComponent({ src, title }: ComicCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img
        src={src}
        alt={title}
        width={100}
        height={120}
        className={styles.img}
      />
      <Typography type="p1" weight="bold" className={styles.description}>
        {title}
      </Typography>
    </div>
  );
}

const propsAreEqual = (
  prevProps: ComicCardProps,
  nextProps: ComicCardProps
): boolean => {
  const propsToCompare: Array<keyof ComicCardProps> = ['src', 'title'];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const ComicCard = memo(ComicCardComponent, propsAreEqual);
