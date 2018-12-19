import React from 'react'
import { render } from 'react-dom'
import App from './Component/App/App'
import './fonts/fonts.css'
import BrowserRouter from "react-router-dom/es/BrowserRouter";

import {BrowserRouter as Router, NavLink, Route, Switch,Redirect , hashHistory} from 'react-router-dom';
render(
    <Router>
        <App />
    </Router>,
  document.getElementsByClassName('app')[0],
)
