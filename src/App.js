import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import allActions from './actions'


const App = () => {

  // useSelector  takes in a function argument that returns the part of the state that you want
  // counter and currentUser. We defined these earlier when combining reducers
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)


  // We will invoke useDispatch and store it to a variable, dispatch
  // Dispatch will work with the all Actions imported from the actions folder
  const dispatch = useDispatch()

  const user = {name: "Rei"}

  useEffect(() => {
    //setUser function defined in userActions.js:
    // setUser will return an object with type and payload.
    // Dispatch will take this object and look through the reducers that match the action type
    dispatch(allActions.userActions.setUser(user)) 
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Rei</button>
        </>
        }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>
    </div>
  );
}

export default App;
