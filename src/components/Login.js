import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class Login extends Component {
  handleLogin() {
    console.log("Logging in");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

    });
  }

  render() {
    return (
      <div className="container-center panel panel-default">
        <form>
          <div className="form-group">
            <input className="form-control" type="text" id="email" name="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" id="password" name="password" placeholder="Password"/>
          </div>
          <Button bsStyle='primary' bsSize='large' onClick={this.handleLogin}>Login</Button>
        </form>
      </div>
    )
  }
}

export default Login;
