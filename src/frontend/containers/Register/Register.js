import React, {Component} from 'react';
import Auxilary from '../../highorder/Auxilary';
import {Button, Icon, Input, Menu, Image,Container} from 'semantic-ui-react';

class Register extends Component {

  render(){
    return (
      <div className ="Register">
       <Container style={{display:'block',width:'400px', marginTop:"200px", justifyContent:'center', alignItems:'center', height:'500px'}}>
        <Input  placeholder="Type in Username" name="username" onChange = {this.props.handleChange}> </Input> 
        <Input  placeholder="Type in Password" name="password" onChange = {this.props.handleChange}> </Input> 
        <Input placeholder="Confirm Password" name="confirmPassword" onChange = {this.props.handleChange}> </Input> 
         <div style={{display:'flex', justifyContent:'center'}}>
        <Button onClick ={this.props.handleRegister}>Register</Button>
        <Button>Cancel</Button>
        </div>
        </Container>
    </div>
  )
}

}

export default Register;
