
import React, { Component } from 'react';

// import { Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import {
  MemoryRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom'

import './main.css'

// import ConnectedRoster, {Roster} from '../Roster/roster'
import ConnectedRoster from '../Roster/roster'

			// <Route path='/applications/new' component={ AddApplicationPage }/>
					// <Route path='/roster' render={ props => <MotivePower foo="here" {...props}/> } />

export default class Main extends Component {

	render() {

		return (
			<div className='main'>
					<Route path='/roster' component={ConnectedRoster} />
			</div>
		);
	};
}


			// <div className='main'>
			// 	<Router>
			// 	  <Switch>
			// 		<Route path='/roster' component={ConnectedRoster} />
			// 	  </Switch>
			// 	</Router>
			// </div>
