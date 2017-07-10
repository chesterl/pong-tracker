import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    console.log(this.props.user);
    var userId = this.props.user.userId;
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    firebase.database().ref('users/' + userId).set({
      name: name,
      location: location
    });
  }

  render() {
    return (
      <div className='container-center panel panel-default'>
        <h1>Edit Profile</h1>
        <br />
        <form className='v-xxxspace'>
          <div className='form-group'>
            <input className='form-control' type='text' id='name' name='name' placeholder='Name'/>
          </div>
          <div className='form-group'>
            <input className='form-control' type='text' id='location' name='location' placeholder='Location'/>
          </div>
          <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this.handleUpdate}>Save</Button>
        </form>
      </div>
    )
  }
}

export default Profile;
