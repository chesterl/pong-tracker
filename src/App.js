import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-center">
        <div className="container-center panel panel-default">
            <Button className= "" bsStyle="primary" bsSize="large">Register</Button>
            <Button bsStyle="success v-space" bsSize="large">Login</Button>
        </div>
      </div>
    );
  }
}

export default App;
