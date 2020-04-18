import ReactDOM from 'react-dom';
// import React, { Component } from 'react'
import {Provider} from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

import App   from './App';

import './index.css';
import 'ux-styleguide/dist/ux-styleguide.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();


// <Provider store={store}>
//     //  <Router>
//      <App />
//  </Router>
// </Provider>,
