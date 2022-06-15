import { Icon, Typography } from 'components/atoms';
import React, { memo } from 'react';
import styles from './CardHero.module.scss';

export interface CardHeroProps {
  src: string;
  name: string;
  isFavorite: boolean;
  onFavorite: () => void;
  disabled?: boolean;
}

function CardHeroComponent({
  src,
  name,
  isFavorite,
  onFavorite,
  disabled,
}: CardHeroProps): JSX.Element {
  return (
    <div>
      <img
        src={src}
        width="200px"
        height="196px"
        alt="img"
        className={`${styles.mr} ${styles.img}`}
      />
      <div className={styles['description-container']}>
        <Typography type="h2" weight="bold">
          {name}
        </Typography>
        <Icon
          name={`favorite${isFavorite ? 'On' : 'Of'}`}
          onClick={onFavorite}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

CardHeroComponent.defaultProps = {
  disabled: false,
};

const propsAreEqual = (
  prevProps: CardHeroProps,
  nextProps: CardHeroProps
): boolean => {
  const propsToCompare: Array<keyof CardHeroProps> = [
    'src',
    'name',
    'isFavorite',
    'onFavorite',
  ];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const CardHero = memo(CardHeroComponent, propsAreEqual);
