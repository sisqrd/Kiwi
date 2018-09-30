import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return (
      <Auxilary>
      <form className = "Login">
        <input placeholder="Type in Username"></input>
        <input placeholder="Type in Password"></input>
        <button>Login</button>
        <button>Cancel</button>
      </form>
    </Auxilary>
  )
}
}

export default Login;
