import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';
import { Container,Button,Form, Input} from 'semantic-ui-react'

class Register extends Component {

  render(){
    return (
      <div className ="Register">
          <Container style={{display:'block',width:'400px', marginTop:"200px", justifyContent:'center', alignItems:'center', height:'500px'}}>
          <h2 style={{display:'flex', justifyContent:'center'}}> Join our Kiwi Family </h2>
        <Input  style={{display:'flex', padding:'10px'}} placeholder="Type in Username" name="username" onChange = {this.props.handleChange}></Input>
        <Input  style={{display:'flex', padding:'10px'}} placeholder="Type in Password" name="password" onChange = {this.props.handleChange}></Input>
        <Input style={{display:'flex', padding:'10px'}} placeholder="Confirm Password" name="confirmPassword" onChange = {this.props.handleChange}></Input>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button basic color='olive'style={{width:'190px'}} onClick ={this.props.handleRegister}>Register</Button>
        <Button  basic color='teal' style={{width:'190px'}} >Cancel</Button>
        </div>
        </Container>
    </div>
  )
}

}

export default Register;
