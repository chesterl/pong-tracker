import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FilterLink from '../containers/FilterLink';


class Home extends Component {
  render() {
    return (
      <div className='container-center panel panel-default'>
        <FilterLink filter="login">
          <Button bsStyle='success v-space' bsSize='large'>Login</Button>
        </FilterLink>

        <FilterLink filter="register">
          <Button bsStyle='primary' bsSize='large'>Register</Button>
        </FilterLink>
      </div>
    )
  }
}


export default Home;
