import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import NewsProvider from './providers/news-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
);


