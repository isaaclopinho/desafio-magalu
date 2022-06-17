import { Icon, Typography } from 'components/atoms';
import React, { memo } from 'react';
import { Md5 } from 'ts-md5';
import { clamp } from 'utils/math';
import styles from './Ratings.module.scss';

export interface RatingsProps {
  title: string;
  rating?: number;
  className?: string;
}

function RatingsComponent({
  title,
  rating = 5,
  className,
}: RatingsProps): JSX.Element {
  const RATING = clamp(rating, 0, 5);

  return (
    <div className={`${styles.container} ${className}`}>
      <Typography type="p1" weight="bold" className={styles.mr}>
        {title}
      </Typography>
      <div className={styles.stars}>
        {Array(RATING)
          .fill(0)
          .map((_, index) => (
            <Icon key={Md5.hashStr(index.toString())} name="ratingOn" />
          ))}
      </div>
    </div>
  );
}

RatingsComponent.defaultProps = {
  rating: 5,
  className: undefined,
};

const propsAreEqual = (
  prevProps: RatingsProps,
  nextProps: RatingsProps
): boolean => {
  const propsToCompare: Array<keyof RatingsProps> = ['className'];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const Ratings = memo(RatingsComponent, propsAreEqual);
