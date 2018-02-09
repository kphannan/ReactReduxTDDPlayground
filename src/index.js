import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
// import { MemoryRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'
// import { Tables } from 'ux-react-styleguide';
// <script src="https://pages.github.homedepot.com/ux/ux-styleguide/dist/ux-styleguide.min.js"></script>
import './index.css';
import 'ux-styleguide/dist/ux-styleguide.min.css';

const store = configureStore();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Provider store={store}>
	    <Router>
			<App />
		</Router>
	</Provider>,
document.getElementById('root'));
registerServiceWorker();


	// <Provider store={store}>
	// 	<Router>
	// 		<App />
	// 	</Router>
	// </Provider>,
