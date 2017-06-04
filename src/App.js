import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import * as firebase from 'firebase';
import { createStore } from 'redux';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

function login(state = false, action) {
  switch (action.type) {
    case 'CHECK_LOGIN':
      return initApp();
    default:
      return state
  }
}
function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("signed in");
      console.log(user);
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      return true;
      // ...
    } else {
      console.log("Signed out")
      return false;
    }
  });
}

let store = createStore(login)

store.subscribe(() =>
  console.log(store.getState())
)

class App extends Component {
  constructor() {
    super();

    var config = {
      apiKey: "AIzaSyA803jXtR5CX3qVPQkNyUVRKyIHSX_CZZ4",
      authDomain: "pong-tracker.firebaseapp.com",
      databaseURL: "https://pong-tracker.firebaseio.com",
      projectId: "pong-tracker",
      storageBucket: "pong-tracker.appspot.com",
      messagingSenderId: "820532121237"
    };
    firebase.initializeApp(config);

    store.dispatch({ type: 'CHECK_LOGIN' })
  }


  render() {
    return (
      <div className="container-center">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route render={NoMatch} />
        </Switch>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default App;
