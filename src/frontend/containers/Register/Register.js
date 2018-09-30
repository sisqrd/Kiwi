import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Register extends Component {

  render(){
    return (
      <div className ="Register">
        <input  placeholder="Type in Username" name="username" onChange = {this.props.handleChange}></input>
        <input  placeholder="Type in Password" name="password" onChange = {this.props.handleChange}></input>
        <input placeholder="Confirm Password" name="confirmPassword" onChange = {this.props.handleChange}></input>
        <button onClick ={this.props.handleRegister}>Register</button>
        <button>Cancel</button>
    </div>
  )
}

}

export default Register;
