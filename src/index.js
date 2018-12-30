import React from 'react'
import { render } from 'react-dom'
import App from './Component/App'
import './fonts/fonts.css'


import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import saga from './saga';
import logger from 'redux-logger';
import { save, load } from "redux-localstorage-simple"

import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'


const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            logger,

        ),
    ),
)


sagaMiddleware.run(saga)

window.store = store;



render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
    document.getElementsByClassName('app')[0],
)



