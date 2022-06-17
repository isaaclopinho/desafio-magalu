import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/pages';
import { Character } from 'components/pages/Character';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/desafio-magalu/" element={<Home />} />
      <Route path="/desafio-magalu/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
