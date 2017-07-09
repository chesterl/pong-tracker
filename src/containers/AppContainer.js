import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import * as firebase from 'firebase';
import App from '../components/App';
import NavigationBar from '../components/NavigationBar';

class AppContainer extends Component {
  constructor() {
    super();
    firebase.initializeApp({
      apiKey: 'AIzaSyA803jXtR5CX3qVPQkNyUVRKyIHSX_CZZ4',
      authDomain: 'pong-tracker.firebaseapp.com',
      databaseURL: 'https://pong-tracker.firebaseio.com',
      projectId: 'pong-tracker',
      storageBucket: 'pong-tracker.appspot.com',
      messagingSenderId: '820532121237'
    });
    this.checkLogin();
  }

  checkLogin() {
    firebase.auth().onAuthStateChanged((response) => {
      if (response) {
        const email = response.email;
        this.props.actions.userLogin({
          email
        });
        console.log('LOGGED IN')
      } else {
        this.props.actions.userLogout();
      }
    });
  }

  render() {
    return (
      <div className='full-height'>
        <NavigationBar user={this.props.user}/>
        <App user={this.props.user} store={this.props.store}/>
      </div>
    )
 }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
