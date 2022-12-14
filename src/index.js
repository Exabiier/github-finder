import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GithubProvider} from './Context/ContextAPI'
import {AlertProvider} from './Context/alertContext/AlertContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GithubProvider>
    <AlertProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertProvider>
  </GithubProvider>

);



