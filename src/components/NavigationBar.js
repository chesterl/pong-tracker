import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import * as firebase from 'firebase';

// TODO: Investigate usage with linkcontainer,
// import { LinkContainer } from 'react-router-bootstrap';
// import FilterLink from '../containers/FilterLink';
// import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  constructor() {
    super();
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  loggedIn() {
    return !(typeof(this.props.user.email) === 'undefined');
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.props.actions.userLogout();
      console.log('LOGGED OUT');
    }).catch(function(error) {
      console.log('ERROR LOGGING OUT');
    });
  }

  renderSignout() {
      if (this.loggedIn()) {
        return (
          <Nav pullRight>
            <NavItem>
              Logged in as {this.props.user.email}
            </NavItem>
            <NavItem href='/profile/edit'>
              Profile
            </NavItem>
            <NavItem onClick={this.handleSignOut}>
              Sign out
            </NavItem>
          </Nav>
        )
      } else {
        return (
          ''
        );
      }
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Pong Tracker</a>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderSignout()}
      </Navbar>
    )
  }
}

export default NavigationBar;
