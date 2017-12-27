import React, { Component } from 'react';
import { MemoryRouter as Router } from 'react-router-dom'
import './App.css';

import Header from './component/Header/header';
import Main from './container/Main/main';





class App extends Component {
  render() {
    return (
        <div id="app">
          <Header />
		  <Router>
    	      <Main />
          </Router>
        </div>
    );
  }
}


export default App;
