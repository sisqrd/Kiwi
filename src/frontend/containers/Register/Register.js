import React, {Component} from 'react';
import firebase from 'firebase';
import Auxilary from '../../highorder/Auxilary';

const config = {
  apiKey: "AIzaSyCoDCRFGKuNj_oBxQiLrClFlHlBlHkJjAQ",
  authDomain: "tensile-psyche-218000.firebaseapp.com",
  databaseURL: "https://tensile-psyche-218000.firebaseio.com",
  projectId: "tensile-psyche-218000",
  storageBucket: "tensile-psyche-218000.appspot.com",
  messagingSenderId: "271934682296"
};
firebase.initializeApp(config)

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
      <Auxilary>
      <form className = "Register">
        <input  placeholder="Type in Username" name="username" onChange = {this.handleChange}></input>
        <input  placeholder="Type in Password" name="password" onChange = {this.handleChange}></input>
        <input placeholder="Confirm Password"></input>
        <button>Register</button>
        <button>Cancel</button>
      </form>
    </Auxilary>
  )
}

}

export default Register;
