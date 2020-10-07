import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Implement Redux
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

/**
 * createStore. It takes in two arguments
 * 1 rootReducer which is the file that combined our reducers
 * 2 Redux devtools extension
 */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

//  Provider component will take in one prop, store which will be set to the store from createStore
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


