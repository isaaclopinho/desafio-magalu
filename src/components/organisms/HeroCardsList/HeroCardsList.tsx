import { Image } from 'components/atoms';
import { CardHero } from 'components/molecules';
import React, { memo } from 'react';
import { CharacterType } from 'services/types';
import styles from './HeroCardsList.module.scss';

export interface HeroCardsListProps {
  data: CharacterType[];
  disabled?: boolean;
  favoriteArray?: number[];
  onFavorite?: (id: number) => void;
  className?: string;
}

function HeroCardsListComponent({
  data,
  disabled,
  onFavorite,
  className,
  favoriteArray,
}: HeroCardsListProps): JSX.Element {
  return data.length > 0 ? (
    <div className={`${styles.main} ${className}`}>
      {data.map((hero: CharacterType) => {
        const handleFavorite = (): void => onFavorite?.(hero.id);

        return (
          <CardHero
            key={hero.id}
            onFavorite={handleFavorite}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            name={hero.name}
            isFavorite={favoriteArray?.includes(hero.id) ?? false}
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
