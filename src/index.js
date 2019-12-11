// Libraries:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// Functions:
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router';
// import * as serviceWorker from './serviceWorker';
// Components:
import App from './App';
import reducer from './reducers/combinedReducers';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
