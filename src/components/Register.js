import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class Register extends Component {
  constructor() {
    super();
    this.handleSignUp = this.handleSignUp.bind(this);

    // var config = {
    //   apiKey: "AIzaSyA803jXtR5CX3qVPQkNyUVRKyIHSX_CZZ4",
    //   authDomain: "pong-tracker.firebaseapp.com",
    //   databaseURL: "https://pong-tracker.firebaseio.com",
    //   projectId: "pong-tracker",
    //   storageBucket: "pong-tracker.appspot.com",
    //   messagingSenderId: "820532121237"
    // };
    // firebase.initializeApp(config);
    // this.initApp();
  }

  // initApp() {
  //   // Listening for auth state changes.
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     // document.getElementById('quickstart-verify-email').disabled = true;
  //     if (user) {
  //       // User is signed in.
  //       var displayName = user.displayName;
  //       var email = user.email;
  //       var emailVerified = user.emailVerified;
  //       var photoURL = user.photoURL;
  //       var isAnonymous = user.isAnonymous;
  //       var uid = user.uid;
  //       var providerData = user.providerData;
  //       // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
  //       // document.getElementById('quickstart-sign-in').textContent = 'Sign out';
  //       // document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
  //       // if (!emailVerified) {
  //       //   document.getElementById('quickstart-verify-email').disabled = false;
  //       // }
  //       console.log("signed in")
  //     } else {
  //       // User is signed out.
  //       // document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
  //       // document.getElementById('quickstart-sign-in').textContent = 'Sign in';
  //       // document.getElementById('quickstart-account-details').textContent = 'null';
  //     }
  //     // document.getElementById('quickstart-sign-in').disabled = false;
  //   });
  // }

  handleSignUp() {
    console.log("Signing up");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
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
          <Button bsStyle='primary' bsSize='large' id='quickstart-sign-up' onClick={this.handleSignUp}>Sign Up</Button>
        </form>
      </div>
    )
    /* <button disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>
        <button id="quickstart-password-reset" name="verify-email">Send Password Reset Email</button> */

  }
}

export default Register;
