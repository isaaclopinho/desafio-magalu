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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
