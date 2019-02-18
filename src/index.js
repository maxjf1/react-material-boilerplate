import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import AppServiceWorker from './registerServiceWorker';

const appSW = new AppServiceWorker();
ReactDOM.render(<App appServiceWorker={appSW} />, document.getElementById('root'));
appSW.register();