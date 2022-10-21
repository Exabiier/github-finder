import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GithubProvider} from './Context/Context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GithubProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GithubProvider>
);



