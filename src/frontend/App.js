import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import './App.css';

class App extends Component {
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
