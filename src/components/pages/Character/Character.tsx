import { Icon, Image, Typography } from 'components/atoms';
import { Input } from 'components/molecules';
import { ComicCard } from 'components/molecules/ComicCard';
import { CounterSection } from 'components/molecules/CounterSection';
import { Ratings } from 'components/molecules/Ratings';
import { ComicsList } from 'components/organisms/ComicsList';
import CharacterContext from 'context/characters';
import moment from 'moment';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  favoriteCharacter,
  getFavorites,
  maxFavorites,
} from 'services/favorites';
import { CharacterType } from 'services/types';
import { notifyError } from 'utils/toasts';
import styles from './Character.module.scss';

const mock = [
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/450px-Gull_portrait_ca_usa.jpg',
    title: 'TESTE HEROIasdd sdadsads',
  },
  {
    id: 12,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/450px-Gull_portrait_ca_usa.jpg',
    title: 'TESTE HERs',
  },
  {
    id: 1123123,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/450px-Gull_portrait_ca_usa.jpg',
    title: 'TESTE HEROIads',
  },
  {
    id: 11241142,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/450px-Gull_portrait_ca_usa.jpg',
    title: 'Tdsads',
  },
];

function Character(): JSX.Element {
  const { state } = useContext(CharacterContext);

  const [favorites, setFavorites] = useState<CharacterType[]>(getFavorites());

  const isFavorite = useMemo(
    () => favorites.find((char) => state?.id === char.id),
    [favorites, state]
  );

  const onFavorite = useCallback(() => {
    if (!state) {
      return;
    }

    const lsFavorites = favoriteCharacter({ character: state });

    if (lsFavorites.limitReached) {
      notifyError(`O máximo de favoritos é ${maxFavorites}.`);
    }

    setFavorites(lsFavorites.characters);
  }, [state]);

  return (
    <div className={styles['main-container']}>
      <div className={`${styles.header} ${styles['xlg-margin']}`}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Image
            name="logoNoText"
            height={33}
            width={100}
            alt="logo"
            className={`${styles.image} ${styles.mr}`}
          />
          <Typography type="h3" weight="bold" className={styles['text-logo']}>
            Search heros
          </Typography>
        </div>

        <Input
          type="white"
          placeholder="Procure por heróis"
          className={`${styles['input-container']}`}
          value=""
          loading={false}
          setValue={() => ''}
          disabled={false}
        />
      </div>
      <div className={styles['body-container']}>
        <div className={`${styles.content}`}>
          <div
            className={`${styles['hero-description']} ${styles['lg-margin']}`}
          >
            <div>
              <div
                className={`${styles['lg-margin']} ${styles['header-title']}`}
              >
                <Typography type="h1" weight="bold">
                  {state?.name}
                </Typography>
                <Icon
                  name={`favorite${isFavorite ? 'On' : 'Of'}`}
                  size={26}
                  onClick={onFavorite}
                />
              </div>
              <Typography
                type="p2"
                color="gray-light"
                weight="regular"
                className={`${styles.line} ${styles['md-margin']}`}
              >
                {state?.description && state?.description.length > 0
                  ? state.description
                  : 'Personagem não possui descrição.'}
              </Typography>

              <div
                className={`${styles['md-margin']} ${styles['counter-sections']}`}
              >
                <CounterSection
                  iconName="book"
                  title="Quadrinhos"
                  amount={state?.comics?.available ?? 0}
                />

                <CounterSection
                  iconName="trailer"
                  title="Filmes"
                  amount={state?.series?.available ?? 0}
                />
              </div>

              <Ratings title="Rating:" className={styles['md-margin']} />

              <div className={styles['last-comic-container']}>
                <Typography type="p1" weight="bold" className={styles.mr}>
                  Último quadrinho:
                </Typography>
                <Typography type="p1">{moment().format('ll')}</Typography>
              </div>
            </div>

            <img
              src={`${state?.thumbnail.path}.${state?.thumbnail.extension}`}
              width="300px"
              height="300px"
              alt="img"
              className={styles['hero-image']}
            />
          </div>

          <div className={styles['comic-section']}>
            <Typography type="p3" weight="bold" className={styles['lg-margin']}>
              Últimos lançamentos
            </Typography>

            <ComicsList
              data={mock}
              textEmpty="Não há quadrinhos disponíveis!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Character };
