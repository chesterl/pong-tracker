import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import * as firebase from 'firebase';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


class App extends Component {
  constructor() {
    super();

    firebase.initializeApp({
      apiKey: "AIzaSyA803jXtR5CX3qVPQkNyUVRKyIHSX_CZZ4",
      authDomain: "pong-tracker.firebaseapp.com",
      databaseURL: "https://pong-tracker.firebaseio.com",
      projectId: "pong-tracker",
      storageBucket: "pong-tracker.appspot.com",
      messagingSenderId: "820532121237"
    });
    firebase.auth().onAuthStateChanged((user) => {
      console.log('checking login')
      if (user) {
        this.props.actions.userLogin(user)
        console.log("logged in")
        // ...
      } else {
        // store.dispatch({ type: 'FAILED_LOGIN' });
      }
    });
  }

  render() {
    const { user } = this.props;

    console.log(user);

    return (
      <Provider>
        <BrowserRouter>
          <div className="container-center">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route render={NoMatch} />
            </Switch>
            <Link to='/'>Home</Link>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
