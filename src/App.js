import React, { Component } from 'react';
import firebase from 'firebase';
import Layout from './frontend/components/Layout/Layout';
import Register from './frontend/containers/Register/Register';
import Login from './frontend/containers/Login/Login';
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
  }

  handleLogin = () => {

  }

  handleRegister = () => {

  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Register />
          <Login />
        </Layout>
      </div>
    );
  }
}

export default App;
