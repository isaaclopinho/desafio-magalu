import { Icon, Image, Typography } from 'components/atoms';
import { Toggle } from 'components/atoms/Toggle';
import { Input } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { ExampleGet } from 'services/example';

function App(): JSX.Element {
  useEffect(() => {
    const getExample = async (): Promise<void> => {
      const data = await ExampleGet();
    };

    getExample();
  }, []);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Typography type="h1" color="primary-lighter">
        LG_HEADER
      </Typography>
      <div style={{ width: '50%' }}>
        <Input type="default" placeholder="ABC" />
      </div>
      <Typography type="h2" color="gray-lighter">
        LG_HEADER
      </Typography>
      <Typography type="h3">LG_HEADER</Typography>
      <Typography type="p1" weight="bold" color="primary-light">
        LG_HEADER
      </Typography>
      <Typography type="p2">LG_HEADER</Typography>
      <Typography type="p3">LG_HEADER</Typography>
      <Typography type="p4">LG_HEADER</Typography>
      <Typography type="p5">LG_HEADER</Typography>
      <Typography type="p6">LG_HEADER</Typography>
      <Icon name="favoriteOf" />
      <Image name="logo" width={256} height="50%" alt="logo" />
      <Toggle checked={checked} onChecked={setChecked} />
    </div>
  );
}

export default App;
