/**
 * To be organized, we import these two files under one location, the index.js file within the actions folder. 
 * We create a variable allActions and set it to an object that contains the imported actions which will be exported
 */
import counterActions from './counterActions'
import userActions from './userActions'

const allActions = {
    counterActions,
    userActions
}

export default allActions