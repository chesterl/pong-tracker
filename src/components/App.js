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
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not Found</h3>
  </div>
)

class App extends Component {
  constructor() {
    super();
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.props.actions.userLogout();
      console.log('LOGGED OUT');
    }).catch(function(error) {
      console.log('ERROR LOGGING OUT');
    });
  }

  loggedIn() {
    return !(typeof(this.props.user.email) === 'undefined');
  }

  render() {
    const { user } = this.props;
    const email = user.email || '';

    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className='container-center'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' render={() => (
                this.loggedIn() ? (
                  <Redirect to='/'/>
                ) : (
                  <Login />
                )
              )}/>
              <Route path='/register' render={() => (
                this.loggedIn() ? (
                  <Redirect to='/'/>
                ) : (
                  <Register />
                )
              )}/>
              <Route render={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

/* Removed
<Link to='/'>Home</Link>
<p> SIGNED IN {email}</p>
<Button bsStyle='info' bsSize='large' onClick={this.handleSignOut}>Sign Out</Button>

*/
