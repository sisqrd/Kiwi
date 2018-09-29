import React, { Component } from 'react';
import Layout from './frontend/components/Layout/Layout';
import Register from './frontend/containers/Register/Register';
import Login from './frontend/containers/Login/Login';
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
