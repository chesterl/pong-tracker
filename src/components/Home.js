import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='container-center panel panel-default'>
        <Link to='/register'>
          <Button bsStyle='primary' bsSize='large'>Register</Button>
        </Link>
        <Link to='/login'>
          <Button bsStyle='success v-space' bsSize='large'>Login</Button>
        </Link>
      </div>
    )

  }
}

export default Home;
