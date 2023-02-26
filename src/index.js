import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './header/header';
import Main from './main/main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Header />
    <Main/>
  </>
);


