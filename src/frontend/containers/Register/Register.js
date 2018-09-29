import React, {Component} from 'react';

class Register extends Component {
  render(){
    return (
      <>
      <form className = "Register">
        <input placeholder="Type in Username"></input>
        <input placeholder="Type in Password"></input>
        <input placeholder="Confirm Password"></input>
        <button>Register</button>
        <button>Cancel</button>
      </form>
    </>
  )
}

}

export default Register;
