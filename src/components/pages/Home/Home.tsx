import { Image, Toggle, Typography } from 'components/atoms';
import { IconText, Input } from 'components/molecules';
import { HeroCardsList } from 'components/organisms';
import React, { useCallback, useEffect, useState } from 'react';
import { GetCharacters, GetCharactersReturnType } from 'services/characters';
import { CharacterType } from 'services/types';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<CharacterType[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [herosVisible, setHerosVisible] = useState<boolean>(false);
  const [toggleChecked, setToggleChecked] = useState<boolean>(false);

  const resetStates = useCallback(() => {
    setData([]);
    setLimit(0);
    setCount(0);
    setTotal(0);
    setOffset(0);
    setHasError(true);
    setLoading(false);
    setHerosVisible(false);
    setSearchTerm(null);
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
        offset: 1,
      });

      if (!response._hasError) {
        const resp: GetCharactersReturnType = response;
        setData(resp.data.results);
        setLimit(resp.data.limit);
        setCount(resp.data.count);
        setTotal(resp.data.total);
        setOffset(resp.data.offset);
        setHerosVisible(true);
        setHasError(false);
        setLoading(false);
        return;
      }
      resetStates();
    };

    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleSearch = useCallback(() => {
    if (!loading) {
      setLoading(true);
    }
  }, [loading]);

  const settingSearchTerm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);

      if (e.target.value.length === 0) {
        resetStates();
      }
    },
    [resetStates]
  );

  return (
    <div className={!herosVisible ? styles['full-height'] : ''}>
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

              <div style={{ display: 'flex' }}>
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
          </div>
        </div>
      )}
    </div>
  );
}

export { Home };
