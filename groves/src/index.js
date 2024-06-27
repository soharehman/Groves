// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/main.css'; // Import the main CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage/landingPage';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  </React.StrictMode>
);
