import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Register extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return (
      <div className ="Register">
      <form>
        <input  placeholder="Type in Username" name="username" onChange = {this.handleChange}></input>
        <input  placeholder="Type in Password" name="password" onChange = {this.handleChange}></input>
        <input placeholder="Confirm Password"></input>
        <button onClick ={this.props.handleRegister}>Register</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

}

export default Register;
