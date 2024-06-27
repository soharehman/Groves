// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
