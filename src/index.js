import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// custom components
import App from './App';
// style
import './assets/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
