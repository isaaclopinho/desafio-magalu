import { Image, Typography } from 'components/atoms';
import { Input } from 'components/molecules';
import React from 'react';
import styles from './Home.module.scss';

// export interface HomeProps {}

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
          className={styles['input-container']}
        />
      </div>
      <div style={{ minHeight: '90vh', backgroundColor: 'yellow' }}>
        <Typography type="h1">Body</Typography>
      </div>
    </div>
  );
}

export { Home };
