/**
 * 
 * @param {*} state state will be set to an empty object that will contain the keys user and loggedIn
 * @param {*} action 
 */
const currentUser = (state = {}, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;