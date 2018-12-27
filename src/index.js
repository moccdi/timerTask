import React from 'react'
import { render } from 'react-dom'
import App2 from './Component/App'
import './fonts/fonts.css'

import { BrowserRouter as Router } from 'react-router-dom';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga'
import saga from './saga';
import reducer from './reducers'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware,logger)));
sagaMiddleware.run(saga) //

window.store = store;

render(
    <Provider store={store}>
        <Router>
            <App2/>
        </Router>
    </Provider>,
  document.getElementsByClassName('app')[0],
)
