import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'

const store = configureStore();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>,
document.getElementById('root'));
registerServiceWorker();


	// <Provider store={store}>
	// 	<Router>
	// 		<App />
	// 	</Router>
	// </Provider>,
