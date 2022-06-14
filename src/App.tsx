import { logo } from 'assets/images';
import React, { useEffect } from 'react';
import { ExampleGet } from 'services/example';

import './App.scss';

function App(): JSX.Element {
  useEffect(() => {
    const getExample = async (): Promise<void> => {
      const data = await ExampleGet();
      console.log(data);
    };

    console.log('abc');
    getExample();
  }, []);

  return <div className="App" />;
}

export default App;
