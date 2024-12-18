import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router';
import { Components } from './Components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="components" element={<Components />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
