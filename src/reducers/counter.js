
/**
 * 
 * @param {*} state State does not necessarily have to be set to an object. In this case, the default value of the state is set to an integer.

 * @param {*} action an action returns an object that can contain two keys,
     type and optionally a payload. Based on the action type, the value of the state will be changed.

     Keep in mind that a default case is necessary in the event that an action type is called that does not exist
      to prevent the app from breaking.
 */
const counter = (state = 1, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default: 
            return state
    }
}

export default counter