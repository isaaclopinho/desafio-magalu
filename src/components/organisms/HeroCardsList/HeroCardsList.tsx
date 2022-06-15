import { CardHero } from 'components/molecules';
import React, { memo } from 'react';
import styles from './HeroCardsList.module.scss';

export type HeroDataType = {
  id: string;
  src: string;
  name: string;
};

export interface HeroCardsListProps {
  data: HeroDataType[];
  disabled?: boolean;
  favoriteArray?: string[];
  onFavorite?: (id: string) => void;
  className?: string;
}

function HeroCardsListComponent({
  data,
  disabled,
  onFavorite,
  className,
  favoriteArray,
}: HeroCardsListProps): JSX.Element {
  return (
    <div className={`${styles.main} ${className}`}>
      {data.map((hero: HeroDataType) => {
        const handleFavorite = (): void => onFavorite?.(hero.id);

        return (
          <CardHero
            key={hero.id}
            onFavorite={handleFavorite}
            src={hero.src}
            name={hero.name}
            isFavorite={favoriteArray?.includes(hero.id) ?? false}
            disabled={disabled}
          />
        );
      })}
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
  ];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const HeroCardsList = memo(HeroCardsListComponent, propsAreEqual);
