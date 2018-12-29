import React from 'react'
import { render } from 'react-dom'
import App2 from './Component/App'
import './fonts/fonts.css'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import saga from './saga';
import logger from 'redux-logger';


import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { ConnectedRouter } from 'connected-react-router'
import {AppContainer} from "react-hot-loader";

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
            <App2 history={history} /> { /* pass history object as props */ }
        </Provider>,
    document.getElementsByClassName('app')[0],
)



