import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from  './styles/globalStyles.js';  // O nome Deve Ter A primeira Letra em maiuculo quanto é envolvido com styled 
import App from './app/App.js';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Global />
    {/* <App /> */}
  </React.StrictMode>
);

