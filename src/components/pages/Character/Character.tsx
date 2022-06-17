import { Icon, Image, Typography } from 'components/atoms';
import { Input } from 'components/molecules';
import { CounterSection } from 'components/molecules/CounterSection';
import { Ratings } from 'components/molecules/Ratings';
import { ComicsList } from 'components/organisms/ComicsList';
import CharacterContext from 'context/characters';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  favoriteCharacter,
  getFavorites,
  maxFavorites,
} from 'services/favorites';
import {
  CharacterType,
  ComicType,
  GetComicsByCharacterIdReturnType,
} from 'services/characters/types';
import { notifyError } from 'utils/toasts';
import { GetComicsByCharacterId } from 'services/characters';
import { formatDate } from 'utils/date';
import styles from './Character.module.scss';

function Character(): JSX.Element {
  const { state } = useContext(CharacterContext);
  const [data, setData] = useState<ComicType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate('/desafio-magalu');
    }
  }, [state, navigate]);

  useEffect(() => {
    if (state === null) {
      return;
    }

    const GetData = async (): Promise<void> => {
      setLoading(true);

      const response = await GetComicsByCharacterId({
        id: state?.id,
        limit: 10,
        offset: 0,
      });

      if (!response._hasError) {
        const resp: GetComicsByCharacterIdReturnType = response;
        setLoading(false);
        setData(resp.data.results);
        return;
      }

      setLoading(false);
    };

    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className={styles.logo}>
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
          setValue={() => ''}
          disabled={loading}
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
                  disabled={loading}
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

              {data && data.length > 0 && (
                <div className={styles['last-comic-container']}>
                  <Typography type="p1" weight="bold" className={styles.mr}>
                    Último quadrinho:
                  </Typography>
                  <Typography type="p1">
                    {formatDate({
                      date: data[0].dates.find((x) => x.type === 'onsaleDate')
                        ?.date,
                      mask: 'll',
                    })}
                  </Typography>
                </div>
              )}
            </div>

            <img
              src={`${state?.thumbnail.path}.${state?.thumbnail.extension}`}
              width="300px"
              height="300px"
              alt="img"
              className={styles['hero-image']}
            />
          </div>

          {!loading && data != null && (
            <div className={styles['comic-section']}>
              <Typography
                type="p3"
                weight="bold"
                className={styles['lg-margin']}
              >
                Últimos lançamentos
              </Typography>

              <ComicsList
                data={data}
                textEmpty="Não há quadrinhos disponíveis!"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Character };
