import React from 'react';
import { createRoot } from 'react-dom/client';
import './services/storage.js';
import App from '../estructura/App.jsx';
import '../estructura/diseno.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz #root.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
