import React, { Component } from 'react';
import firebase from 'firebase';
import Layout from './frontend/components/Layout/Layout';
import Register from './frontend/containers/Register/Register';
import Login from './frontend/containers/Login/Login';
import {Button, Icon, Input, Menu, Image,Container} from 'semantic-ui-react';
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
    logIn: true,
    loggedIn: false,
    register: false,
    username: '',
    password: '',
    confirmPassword: '',
    userKey: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onRegisterClick = () => {
    this.setState({
      register: !this.state.register,
      logIn: !this.state.logIn
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    // let that = this
    const query = firebase.database().ref('userData')
    query.once('value')
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const childData = childSnapshot.val()
        if (this.state.username === childData.username && this.state.password === childData.password) {
          this.setState({
            loggedIn: !this.state.loggedIn,
            logIn: !this.state.logIn,
            userKey: childSnapshot.key
          })
        } else if (this.state.username === childData.username) {
          alert('Incorrect Password')
        }
      })
      alert('Please register an account.')
    })
  };

  handleRegister = (event) => {
    event.preventDefault();
    if (this.state.confirmPassword === this.state.password) {
      const userData = firebase.database().ref('userData');
      userData.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const childData = childSnapshot.val()
          if (this.state.username === childData.username && this.state.password === childData.password) {
            alert('Account already exists. Please log in.')
            this.setState({
              register: !this.state.register,
              logIn: !this.state.logIn
            })
          } else {
            const accountInfo = {
              username: this.state.username,
              password: this.state.password
            }
            userData.push(accountInfo);
            this.setState({
              loggedIn: !this.state.loggedIn,
              register: !this.state.register,
              userKey: childSnapshot.key
            });
            console.log(this.state.userKey)
          }
        })
      })
    } else {
      alert('Passwords must match.');
    }
  }

  render() {
    return (
      <div className="App">
        <Layout>
          {this.state.register ? <Register handleChange={this.handleChange} handleRegister={this.handleRegister} /> : null}
          {this.state.logIn ? <Login handleChange={this.handleChange} handleLogin={this.handleLogin} onRegisterClick={this.onRegisterClick} /> : null}
          {this.state.loggedIn ? <Kiwi userKey={this.state.userKey} /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
