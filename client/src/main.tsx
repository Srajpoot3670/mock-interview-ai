import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Agar index.css hai toh, nahi toh ye line hata dein

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
