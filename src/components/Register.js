import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class Register extends Component {
  constructor() {
    super();
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleSignUp() {
    console.log('Signing up');
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
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  render() {
    return (
      <div className='container-center panel panel-default'>
        <form>
          <div className='form-group'>
            <input className='form-control' type='text' id='email' name='email' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input className='form-control' type='password' id='password' name='password' placeholder='Password'/>
          </div>
          <Button bsStyle='primary' bsSize='large' onClick={this.handleSignUp}>Sign Up</Button>
        </form>
      </div>
    )

  }
}

export default Register;
