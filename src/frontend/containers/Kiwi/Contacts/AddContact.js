import React, {Component} from 'react';
import axios from 'axios';
import { Container,Button,Form, Input} from 'semantic-ui-react'

class AddContact extends React.Component {

  state = {
    name: '',
    typedRelationship: '',
    phone: '',
    message: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    let contact = new Object();
    contact.name = this.state.name;
    contact.relationship = this.state.typedRelationship;
    contact.phone = this.state.phone;
    contact.message = this.state.message;

    axios.post('http://localhost:8888/addContact', {
      userId: this.props.userId,
      name: contact.name,
      relationship: contact.relationship,
      phone: contact.phone,
      message: contact.message
    })
    .then( (resp) => {
      this.props.addContact(contact)
      this.props.closeModal()
    })

  }

  render(){
    return (
      <div className = "AddContact">
      <Input className = "labels" placeholder="Contact Name..." name="name" onChange = {this.handleChange}></Input>
      <Input className = "labels" placeholder="Relationship with person..." name="typedRelationship" onChange = {this.handleChange}></Input>
      <Input className = "labels" placeholder="Person's Number" name="phone" onChange = {this.handleChange}></Input>
      <Input className = "labels" placeholder="Emergency Message" name="message" onChange = {this.handleChange}></Input>

      <div className ="buttons" >
        <Button onClick = {this.handleSubmit}>Submit</Button>
        <Button onClick = {() => this.props.closeModal()}>Cancel</Button>
      </div>

      </div>
    )
  }

}

export default AddContact;
