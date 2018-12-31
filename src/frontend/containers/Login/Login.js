import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';
import { Container,Button,Form, Input} from 'semantic-ui-react'


class Login extends Component {

  render(){
    return (
      <div className = "Login">
        <Container style={{display:'block',width:'400px', marginTop:"200px", justifyContent:'center', alignItems:'center', height:'500px'}}>
        <h2 style={{display:'flex', justifyContent:'center'}}> Alert Your Loved Ones </h2>
        <Input  style={{display:'flex', padding:'10px'}} placeholder="Enter Username" name="username" onChange = {this.props.handleChange}></Input>
        <Input  style={{display:'flex', padding:'10px'}} placeholder="Enter Password" type="password" name="password" onChange = {this.props.handleChange}></Input>
        <br/>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button style={{width:'190px'}}  basic color='olive' onClick={this.props.handleLogin}>Login</Button>
          <Button style={{width:'190px'}} basic color='teal' onClick={this.props.onRegisterClick}>Register</Button>
          </div>
        </Container>
    </div>
  )
}
}

export default Login;
