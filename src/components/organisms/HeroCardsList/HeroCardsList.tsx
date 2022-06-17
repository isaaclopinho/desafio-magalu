import { Image } from 'components/atoms';
import { CardHero } from 'components/molecules';
import React, { memo } from 'react';
import { CharacterType } from 'services/characters/types';
import styles from './HeroCardsList.module.scss';

export interface HeroCardsListProps {
  data: CharacterType[];
  disabled?: boolean;
  favoriteArray?: CharacterType[];
  onFavorite?: (char: CharacterType) => void;
  onClick?: (char: CharacterType) => void;
  className?: string;
}

function HeroCardsListComponent({
  data,
  disabled,
  onFavorite,
  className,
  favoriteArray,
  onClick,
}: HeroCardsListProps): JSX.Element {
  return data.length > 0 ? (
    <div className={`${styles.main} ${className}`}>
      {data.map((hero: CharacterType) => {
        const handleFavorite = (): void => onFavorite?.(hero);
        const handleClick = (): void => onClick?.(hero);
        return (
          <CardHero
            key={hero.id}
            onFavorite={handleFavorite}
            onClick={handleClick}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            name={hero.name}
            isFavorite={favoriteArray?.find((x) => x.id === hero.id) != null}
            disabled={disabled}
          />
        );
      })}
    </div>
  ) : (
    <div className={styles['image-container']}>
      <Image
        name="captain"
        width="300px"
        height="300px"
        alt="captain america crying"
        className={styles.image}
      />
    </div>
  );
}

HeroCardsListComponent.defaultProps = {
  disabled: false,
  onFavorite: undefined,
  className: undefined,
  onClick: undefined,
  favoriteArray: [],
};

const propsAreEqual = (
  prevProps: HeroCardsListProps,
  nextProps: HeroCardsListProps
): boolean => {
  const propsToCompare: Array<keyof HeroCardsListProps> = [
    'data',
    'disabled',
    'onFavorite',
    'className',
    'favoriteArray',
  ];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const HeroCardsList = memo(HeroCardsListComponent, propsAreEqual);
