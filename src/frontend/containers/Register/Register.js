import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Register extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange(event) {
    this.setState({})
  }

  render(){
    return (
      <Auxilary>
      <form className = "Register">
        <input placeholder="Type in Username" name="username"></input>
        <input placeholder="Type in Password" name="password"></input>
        <input placeholder="Confirm Password"></input>
        <button>Register</button>
        <button>Cancel</button>
      </form>
    </Auxilary>
  )
}

}

export default Register;
