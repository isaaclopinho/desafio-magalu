import { Image, Toggle, Typography } from 'components/atoms';
import { IconText, Input } from 'components/molecules';
import { HeroCardsList, HeroDataType } from 'components/organisms';
import React from 'react';
import styles from './Home.module.scss';

// export interface HomeProps {}

const mockData: HeroDataType[] = [
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '1',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '2',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '3',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '4',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '5',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '6',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '7',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '8',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '9',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '10',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '11',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '12',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '13',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '14',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '15',
    name: 'Hulk',
  },
  {
    src: 'https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/230982000/888ea42096757fe4d65c4367198af751.jpg',
    id: '16',
    name: 'Hulk',
  },
];

function Home(): JSX.Element {
  return (
    <div>
      <div className={styles.Header}>
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
          className={`${styles['input-container']} ${styles['xlg-margin']}`}
        />
      </div>
      <div className={styles['body-container']}>
        <div className={styles.content}>
          <div
            className={`${styles['filter-container']} ${styles['lg-margin']}`}
          >
            <Typography type="p3" weight="regular" color="gray-light">
              Encontrados 20 heróis
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
              <Toggle checked onChecked={() => null} className={styles.mr} />
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
            data={mockData}
            favoriteArray={['1', '6']}
            className={styles['xlg-margin']}
          />
        </div>
      </div>
    </div>
  );
}

export { Home };
