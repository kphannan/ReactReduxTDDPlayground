
import React, { Component } from 'react';
// import { Component } from 'react';

// import { Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import {
    // MemoryRouter as Router,
    Route,
    Switch,
    // Link
} from 'react-router-dom';

import './main.css';

import Homepage from '../Homepage/Homepage';
// import ConnectedRoster, {Roster} from '../Roster/roster'
import ConnectedRoster from '../Roster/roster';
import RosterList from '../Roster/RosterList';
import AddRosterEntry from '../Roster/AddRosterEntry';

// <Route path='/applications/new' component={ AddApplicationPage }/>
// <Route path='/roster' render={ props => <MotivePower foo="here" {...props}/> } />

export default class Main extends Component {

    render() {

        return (
            <div className='main'>
                <Switch>
                    <Route  exact path="/roster/new" component={AddRosterEntry} />
                    <Route  exact path="/roster/:id" component={ConnectedRoster} />
                    <Route  exact path="/roster"     component={RosterList} />
                    <Route  exact path="/"           component={Homepage} />
                </Switch>
            </div>
        );
    }
}


// <Route       path='/roster/:id' component={ConnectedRoster} />

// <div className='main'>
//  <Router>
//    <Switch>
//      <Route path='/roster' component={ConnectedRoster} />
//    </Switch>
//  </Router>
// </div>
