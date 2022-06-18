import { Image, Toggle, Typography } from 'components/atoms';
import { IconText, Input } from 'components/molecules';
import { HeroCardsList } from 'components/organisms';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { GetCharacters } from 'services/characters';
import {
  CharacterType,
  GetCharactersReturnType,
} from 'services/characters/types';
import ReactPaginate from 'react-paginate';
import { favoriteCharacter, maxFavorites } from 'services/favorites';
import { notify } from 'utils/toasts';
import CharacterContext from 'context/characters';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { clamp } from 'utils/math';
import FavoritesContext from 'context/favorites';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  const { setState } = useContext(CharacterContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string | null>();

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CharacterType[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [herosVisible, setHerosVisible] = useState<boolean>(false);
  const [toggleChecked, setToggleChecked] = useState<boolean>(false);

  const totalPages = useMemo(() => Math.ceil(total / 20), [total]);
  const currentPage = useMemo(
    () => Math.floor(clamp(offset, 0, Number.MAX_SAFE_INTEGER) / 20),
    [offset]
  );

  const resetPages = useCallback(() => {
    setData([]);
    setTotal(0);
    setOffset(0);
    setHerosVisible(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }

    searchParams.delete('search');
    setSearchParams(searchParams);

    const GetData = async (): Promise<void> => {
      setLoading(true);

      const response = await GetCharacters({
        searchTerm: searchTerm ?? '',
        orderBy: 'name',
        limit: 20,
        offset,
      });

      if (!response._hasError) {
        const resp: GetCharactersReturnType = response;
        setData(resp.data.results);
        setTotal(resp.data.total);
        setOffset(resp.data.offset);
        setHerosVisible(true);
        setLoading(false);
        setToggleChecked(false);

        return;
      }
      notify('Ooops! Algo deu errado.', 'error');

      resetPages();
      setLoading(false);
      setHerosVisible(false);
      setSearchTerm(null);
    };

    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleSearch = useCallback(
    (str: string) => {
      if (str.length === 0) {
        setSearchTerm(null);
        setData([]);
        resetPages();

        return;
      }

      if (!loading) {
        setLoading(true);
        setOffset(0);
      }
    },
    [loading, resetPages]
  );

  const settingSearchTerm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const onFavorite = useCallback(
    (character: CharacterType) => {
      const lsFavorites = favoriteCharacter({ character });

      if (lsFavorites.limitReached) {
        notify(`O máximo de favoritos é ${maxFavorites}.`, 'error');
      }

      setFavorites(lsFavorites.characters);
    },
    [setFavorites]
  );

  const onCharacterClick = useCallback(
    (character: CharacterType) => {
      setState(character);
      navigate(`/desafio-magalu/character/`);
    },
    [setState, navigate]
  );

  return (
    <div className={styles['full-height']}>
      <div
        className={`${styles.Header} ${
          !herosVisible ? styles['full-height'] : ''
        }`}
      >
        <Image name="logo" height={90} width={400} alt="logo" />
        <Typography
          type="h1"
          weight="bold"
          align="center"
          className={styles['sm-margin']}
        >
          EXPLORE O UNIVERSO
        </Typography>
        <Typography
          type="p1"
          color="gray-light"
          weight="semibold"
          align="center"
          className={styles['lg-margin']}
        >
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </Typography>

        <Input
          type="default"
          placeholder="Procure por heróis"
          className={`${styles['input-container']} ${
            herosVisible ? styles['xlg-margin'] : ''
          }`}
          value={searchTerm ?? ''}
          loading={loading}
          setValue={settingSearchTerm}
          setCurrentQuery={handleSearch}
          disabled={loading}
        />
      </div>
      {herosVisible && (
        <div className={styles['body-container']}>
          <div className={`${styles.content}`}>
            <div
              className={`${styles['filter-container']} ${styles['lg-margin']}`}
            >
              <Typography type="p3" weight="regular" color="gray-light">
                {searchTerm !== null
                  ? `Encontrado${total > 1 ? 's' : ''} ${
                      toggleChecked ? favorites.length : total
                    } herói${total > 1 ? 's' : ''}`
                  : ''}
              </Typography>

              <div className={styles.filter}>
                <IconText
                  iconName="hero"
                  fontColor="primary"
                  fontWeight="bold"
                  fontType="p1"
                  iconSize={25}
                  text="Ordenar por nome - A/Z"
                  textClassName={styles.text}
                  iconClassName={styles.icon}
                />
                <Toggle
                  checked={toggleChecked}
                  onChecked={setToggleChecked}
                  disabled={loading}
                  className={styles.toggle}
                />
                <IconText
                  iconName="favoriteOn"
                  fontColor="primary"
                  fontWeight="bold"
                  fontType="p1"
                  iconSize={18}
                  text="Somente Favoritos"
                  textClassName={styles.text}
                  iconClassName={styles.icon}
                />
              </div>
            </div>
            <HeroCardsList
              data={toggleChecked ? favorites : data}
              favoriteArray={favorites}
              className={styles['xlg-margin']}
              onFavorite={onFavorite}
              onClick={onCharacterClick}
              disabled={loading}
            />
            <div
              style={{
                display: 'flex',
                pointerEvents: loading ? 'none' : 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {!toggleChecked && (
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  previousLabel="<"
                  onPageChange={({ selected }) => {
                    if (loading) {
                      return;
                    }
                    setOffset(selected * 20);
                    setLoading(true);
                  }}
                  pageRangeDisplayed={5}
                  pageCount={clamp(totalPages, 1, Number.MAX_SAFE_INTEGER)}
                  forcePage={currentPage}
                  marginPagesDisplayed={0}
                  activeClassName={styles.active}
                  disableInitialCallback
                  renderOnZeroPageCount={() => null}
                  className={styles.pagination}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Home };
