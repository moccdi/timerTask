import React from 'react'
import { render } from 'react-dom'
import App from './Component/App/App'
import './fonts/fonts.css'


import {BrowserRouter as Router } from 'react-router-dom';
render(
    <Router>
        <App />
    </Router>,
  document.getElementsByClassName('app')[0],
)
