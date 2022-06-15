import { Typography } from 'components/atoms';
import React from 'react';
import styles from './Home.module.scss';

// export interface HomeProps {}

function Home(): JSX.Element {
  return (
    <div>
      <div style={{ minHeight: '10vh' }}>
        <Typography type="h1">Header</Typography>
      </div>
      <div style={{ minHeight: '90vh', backgroundColor: 'yellow' }}>
        <Typography type="h1">Body</Typography>
      </div>
      <div style={{ backgroundColor: 'red', width: '100%', height: 64 }} />
    </div>
  );
}

export { Home };
