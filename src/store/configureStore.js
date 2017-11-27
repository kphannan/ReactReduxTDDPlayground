
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import motivePower from '../reducer/motivePower'

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createForms } from 'react-redux-form';

// import { loadState, saveState } from './localStorage';
// import { throttle } from 'lodash/throttle';




const loadState = () => {

    const persistedState = {
        // owner:       initialOwnerState,
    };

    return persistedState;
};


// var loadState;

// if ( process.env.NODE_ENV === 'development' ) {
    // loadState = loadStaticState();
// }



const configureStore = () => {
    var persistedState;

    // if ( process.env.NODE_ENV === 'development' ) {
        persistedState = loadState();
    // }

    const rootReducer = combineReducers({
        // motivePower,
        ...createForms({
                // owner,
                motivePower,
        })
    });

    let middleware = [
        thunk
    ];

    // Include logger only in dev/qa
    // if ( process.env.NODE_ENV !== 'production' ) {
    // if ( process.env.NODE_ENV === 'development' ) {
        middleware.push( logger );
    // }

    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    // console.log( "Initial state of the store")
    // console.log( store.getState() );

    // Save state on change only in development/qa
    // if ( process.env.NODE_ENV === 'development' ) {
    //     store.subscribe( () => {
    //         saveState(store.getState())
    //     });
    //     // store.subscribe( throttle(() => { saveState(store.getState())}, 1000 ));
    // }

    return store;
}



export default configureStore;