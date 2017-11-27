import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import MotivePower from './container/MotivePower/motivePower'
import configureStore from './store/configureStore'

const store = configureStore();



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <MotivePower />
        </div>
      </Provider>
    );
  }
}

export default App;




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Containers/App';
// import configureStore from './Store/configureStore';

// import 'ux-styleguide/dist/ux-styleguide.css';
// import { BrowserRouter as Router } from 'react-router-dom'
// import './index.css';

// const store = configureStore();
