import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/router';
import './_index.scss'



/* ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
) */
ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode><Router /></React.StrictMode>);