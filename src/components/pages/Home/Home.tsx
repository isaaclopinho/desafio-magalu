import { Image, Toggle, Typography } from 'components/atoms';
import { IconText, Input } from 'components/molecules';
import { HeroCardsList } from 'components/organisms';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GetCharacters, GetCharactersReturnType } from 'services/characters';
import { CharacterType } from 'services/types';
import ReactPaginate from 'react-paginate';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<CharacterType[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [herosVisible, setHerosVisible] = useState<boolean>(false);
  const [toggleChecked, setToggleChecked] = useState<boolean>(false);

  const totalPages = useMemo(() => Math.ceil(total / 20), [total]);

  const resetPages = useCallback(() => {
    setData([]);
    setCount(0);
    setTotal(0);
    setOffset(0);
    setHerosVisible(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }

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
        setCount(resp.data.count);
        setTotal(resp.data.total);
        setOffset(resp.data.offset);
        setHerosVisible(true);
        setHasError(false);
        setLoading(false);
        return;
      }
      resetPages();
      setHasError(true);
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
      }
      setOffset(0);
    },
    [loading, resetPages]
  );

  const settingSearchTerm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
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
                  ? `Encontrado${total > 1 ? 's' : ''} ${total} herói${
                      total > 1 ? 's' : ''
                    }`
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
                  className={styles.mr}
                />
                <Toggle
                  checked={toggleChecked}
                  onChecked={setToggleChecked}
                  className={styles.mr}
                  disabled={loading}
                />
                <IconText
                  iconName="favoriteOn"
                  fontColor="primary"
                  fontWeight="bold"
                  fontType="p1"
                  iconSize={18}
                  text="Somente Favoritos"
                />
              </div>
            </div>
            <HeroCardsList
              data={data}
              favoriteArray={[]}
              className={styles['xlg-margin']}
            />
            <div
              style={{
                display: 'flex',
                pointerEvents: loading ? 'none' : 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
                pageCount={totalPages}
                forcePage={Math.floor(offset / 20)}
                marginPagesDisplayed={0}
                activeClassName={styles.active}
                disableInitialCallback
                renderOnZeroPageCount={() => null}
                className={styles.pagination}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Home };
