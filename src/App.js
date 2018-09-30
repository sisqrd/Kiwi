import React, { Component } from 'react';
import firebase from 'firebase';
import Layout from './frontend/components/Layout/Layout';
import Register from './frontend/containers/Register/Register';
import Login from './frontend/containers/Login/Login';
import Kiwi from './frontend/containers/Kiwi/Kiwi'
import './App.css';

const config = {
  apiKey: "AIzaSyCoDCRFGKuNj_oBxQiLrClFlHlBlHkJjAQ",
  authDomain: "tensile-psyche-218000.firebaseapp.com",
  databaseURL: "https://tensile-psyche-218000.firebaseio.com",
  projectId: "tensile-psyche-218000",
  storageBucket: "tensile-psyche-218000.appspot.com",
  messagingSenderId: "271934682296"
};
firebase.initializeApp(config)

class App extends Component {

  state = {
    loggedIn: false,
    register: false,
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleLogin = () => {

  }

  handleRegister = (event) => {
    event.preventDefault();
    const userData = firebase.database().ref('userData');
    const accountInfo = {
      username: this.state.username,
      password: this.state.password
    }
    userData.push(accountInfo);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          {this.state.register ? <Register handleChange={this.handleChange} handleRegister={this.handleRegister} /> : null}
          {this.state.loggedIn ? <Login /> : null}
          <Kiwi />
        </Layout>
      </div>
    );
  }
}

export default App;
