import React from 'react';
import { globalStyle, createGlobalStyle } from '@smooth-ui/core-sc';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`${globalStyle()}`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
