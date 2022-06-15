import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/pages';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<div />} />
    </Routes>
  );
}

export default App;
