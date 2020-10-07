import currentUser from './currentUser'
import counter from './counter'
import {combineReducers} from 'redux'

// We need to combine these reducers into one
//  It takes in one argument, an object that contains the reducer files
const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer