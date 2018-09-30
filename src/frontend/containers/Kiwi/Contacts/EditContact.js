import React, {Component} from 'react';

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
    contact.number = this.state.typedName;
    contact.typedMessage = this.state.typedMessage
    this.props.editContactSubmit(contact)
    this.props.closeModal()
  }

  render(){
    return (
      <div className = "AddContact">
          <input  placeholder="Contact Name..." name="typedName" onChange = {this.handleChange} value={this.props.typedName}></input>
          <input  placeholder="Relationship with peron..." name="typedRelationship" onChange = {this.handleChange} value={this.props.typedRelationship}></input>
          <input  placeholder="Person's Number" name="typedNumber" onChange = {this.handleChange} value={this.props.typedNumber}></input>
          <input  placeholder="Emergency Message" name="typedMessage" onChange = {this.handleChange} value={this.props.typedMessage}></input>

          <button onClick = {this.handleSubmit}>Submit</button>
          <button onClick = {() => this.props.closeModal()}>Cancel</button>
      </div>
    )
  }

}

export default EditContact;
