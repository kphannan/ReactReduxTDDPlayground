import { Component } from 'react';
import React from 'react';
import Main from './container/Main/main';
import Header from './component/Header/header'
import './App.css';


class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Main />
            </div>
        );
    }
}


export default App;
