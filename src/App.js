import React, { Component } from 'react';
import Layout from './frontend/components/Layout/Layout';
import Register from './frontend/containers/Register/Register';
import Login from './frontend/containers/Login/Login';
import Kiwi from './frontend/containers/Kiwi/Kiwi';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    userId: '',
    login: true,
    loggedIn: false,
    register: false,
    username: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onRegisterClick = () => {
    this.setState({
      register: !this.state.register,
      login: !this.state.login
    })
  }

  handleLogin = (event) => {
    let user = this.state.username;
    let pass = this.state.password;
    console.log(user);
    console.log(pass);
    axios.post('http://localhost:8888/login', {
      username: user,
      password: pass
    })
    .then( (resp) => {
      if (resp.data.success) {
        this.setState({
          userId: resp.data.userId,
          login: false,
          register: false,
          loggedIn: true
        })
      }
      else {
        console.log('error');
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  handleRegister = (event) => {
    let user = this.state.username;
    let pass = this.state.password;
    console.log(user);
    console.log(pass);
    if(pass === this.state.confirmPassword) {
      axios.post('http://localhost:8888/register', {
        username: user,
        password: pass
      })
      .then( resp => {
        console.log(resp);
        this.setState({
          loggedIn: true,
          register: false,
          login: false
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
    return (
      <div className="App">
      <Layout>
      {this.state.register ? <Register handleChange={this.handleChange} handleRegister={this.handleRegister} /> : null}
      {this.state.login ? <Login handleChange={this.handleChange} handleLogin={this.handleLogin} onRegisterClick={this.onRegisterClick} /> : null}
      {this.state.loggedIn ? <Kiwi userId={this.state.userId} /> : null}
      </Layout>
      </div>
    );
  }
}

export default App;
