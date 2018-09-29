import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';


class Register extends Component {
  render(){
    return (
      <Auxilary>
      <form className = "Register">
        <input placeholder="Type in Username"></input>
        <input placeholder="Type in Password"></input>
        <input placeholder="Confirm Password"></input>
        <button>Register</button>
        <button>Cancel</button>
      </form>
    </Auxilary>
  )
}

}

export default Register;
