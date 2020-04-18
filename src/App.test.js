// import React from 'react';
import ReactDOM from 'react-dom';
// import {
//     MemoryRouter as Router,
//     // Route,
//     // Switch,
//     // Link
// } from 'react-router-dom'

// import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
});
