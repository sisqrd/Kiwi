import React, {Component} from 'react';
import axios from 'axios'

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
      <div className = "AddContact">
          <input  name="typedName" onChange = {this.handleChange} placeholder={this.props.typedName}></input>
          <input  name="typedRelationship" onChange = {this.handleChange} placeholder={this.props.typedRelationship}></input>
          <input  name="typedNumber" onChange = {this.handleChange} placeholder={this.props.typedNumber}></input>
          <input  name="typedMessage" onChange = {this.handleChange} placeholder={this.props.typedMessage}></input>

          <button onClick = {this.handleSubmit}>Submit</button>
          <button onClick = {() => this.props.closeModal()}>Cancel</button>
      </div>
    )
  }

}

export default EditContact;
