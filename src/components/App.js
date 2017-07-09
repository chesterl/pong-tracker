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
import { Button } from 'react-bootstrap';


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  constructor() {
    super();
    this.handleSignOut = this.handleSignOut.bind(this);

    firebase.initializeApp({
      apiKey: "AIzaSyA803jXtR5CX3qVPQkNyUVRKyIHSX_CZZ4",
      authDomain: "pong-tracker.firebaseapp.com",
      databaseURL: "https://pong-tracker.firebaseio.com",
      projectId: "pong-tracker",
      storageBucket: "pong-tracker.appspot.com",
      messagingSenderId: "820532121237"
    });
    firebase.auth().onAuthStateChanged((response) => {
      if (response) {
        const email = response.email;
        this.props.actions.userLogin({
          email
        });
        console.log("logged in")
      } else {
        // store.dispatch({ type: 'FAILED_LOGIN' });
      }
    });
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.props.actions.userLogout();
      console.log("logged out");
    }).catch(function(error) {
      console.log("error logging out");
    });
  }

  render() {
    const { user } = this.props;
    const email = user.email || '';
    console.log(user)

    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className="container-center">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route render={NoMatch} />
            </Switch>
            <Link to='/'>Home</Link>
            <p> SIGNED IN {email} </p>
            <Button bsStyle='info' bsSize='large' onClick={this.handleSignOut}>Sign Out</Button>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
