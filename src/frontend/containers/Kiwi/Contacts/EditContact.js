import React, {Component} from 'react';
import axios from 'axios'
import { Container,Button,Form, Input} from 'semantic-ui-react'

class EditContact extends React.Component {

  state = {
    typedName: this.props.typedName,
    typedRelationship: '',
    typedNumber: '',
    typedMessage: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    let contact = new Object();
    contact.name = this.state.typedName;
    contact.relationship = this.state.typedRelationship;
    contact.phone = this.state.typedName;
    contact.message = this.state.typedMessage;

    axios.post('http://localhost:8888/editContact', {
      contactId: this.props.contactId,
      name: contact.name,
      relationship: contact.relationship,
      phone: contact.phone,
      message: contact.message
    })

    this.props.editContact(contact, this.props.index)
    this.props.closeModal()
  }

  render(){
    return (
      <div className = "EditContact">
          <Input className = "labels" name="typedName" onChange = {this.handleChange} placeholder={this.props.typedName}></Input>
          <Input className = "labels" name="typedRelationship" onChange = {this.handleChange} placeholder={this.props.typedRelationship}></Input>
          <Input className = "labels" name="typedNumber" onChange = {this.handleChange} placeholder={this.props.typedNumber}></Input>
          <Input className = "labels" name="typedMessage" onChange = {this.handleChange} placeholder={this.props.typedMessage}></Input>

          <div>
            <Button onClick = {this.handleSubmit}>Submit</Button>
            <Button onClick = {() => this.props.closeModal()}>Cancel</Button>
          </div>
      </div>
    )
  }

}

export default EditContact;
