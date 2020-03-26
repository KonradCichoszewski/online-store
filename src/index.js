import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);