import { Icon, Typography } from 'components/atoms';
import React, { memo } from 'react';
import styles from './CardHero.module.scss';

export interface CardHeroProps {
  src: string;
  name: string;
  isFavorite: boolean;
  onFavorite: () => void;
  disabled?: boolean;
  onClick: () => void;
}

function CardHeroComponent({
  src,
  name,
  isFavorite,
  onFavorite,
  disabled,
  onClick,
}: CardHeroProps): JSX.Element {
  return (
    <div>
      <button
        type="button"
        className={styles['btn-style']}
        onClick={onClick}
        disabled={disabled}
      >
        <img
          src={src}
          width="250px"
          height="250px"
          alt="img"
          className={`${styles.mr} ${styles.img}`}
        />
      </button>
      <div className={styles['description-container']}>
        <button
          type="button"
          className={styles['btn-style']}
          onClick={onClick}
          disabled={disabled}
        >
          <Typography type="h2" weight="bold" className={styles.title}>
            {name}
          </Typography>
        </button>
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
    'onClick',
  ];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const CardHero = memo(CardHeroComponent, propsAreEqual);
