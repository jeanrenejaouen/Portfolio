import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/router';
import './_index.scss'


/* CORRIGER ERREUR : react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. 
Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 
Learn more: https://reactjs.org/link/switch-to-createroot/* 

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
) */

ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><Router /></React.StrictMode>);