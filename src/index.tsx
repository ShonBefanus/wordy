import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export interface CustomWindow extends Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
declare let window:CustomWindow;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = configureStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));
