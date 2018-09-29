import React, {Component} from 'react';

class Login extends Component {
  render(){
    return (
      
      <form className = "Login">
        <input placeholder="Type in Username"></input>
        <input placeholder="Type in Password"></input>
        <button>Login</button>
        <button>Cancel</button>
      </form>
    
  )
}
}

export default Login;
