import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Login extends Component {

  render(){
    return (
      <div className = "Login">
        <input  placeholder="Type in Username" name="username" onChange = {this.props.handleChange}></input>
        <input  placeholder="Type in Password" name="password" onChange = {this.props.handleChange}></input>
        <button onClick={this.props.handleLogin}>Login</button>
        <button onClick={this.props.onRegisterClick}>Register</button>
    </div>
  )
}
}

export default Login;
