import React, {Component} from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Contact from './Contacts/Contact';
import Modal from '../../components/UI/Modal';
import Auxilary from '../../highorder/Auxilary';
import EditContact from './Contacts/EditContact';
import AddContact from './Contacts/AddContact';
import { Checkbox,Card, Button, Icon, Image, Item, Label,Form, Container} from 'semantic-ui-react'

class Kiwi extends Component {

  state = {
    userId: this.props.userId,
    adding: false,
    editing: false,
    contacts: [],
    editContact: {
      contactId: '',
      name: '',
      phone: '',
      relationship: '',
      message: '',
      index: 0,
    }
  }

  componentDidMount() {
    let contacts = []

    axios.get('http://localhost:8888/getContacts/'+this.state.userId)
    .then(response => {
      this.setState({
        contacts: response.data
      })
    })

  }

  editContactHandler = (contact, index) => {
    console.log(index)
    console.log(this.state.contacts[index])
    let editedContact = this.state.contacts[index];
    let contactIndex = index;

    this.setState({
      editing: true,
      editContact: {
        contactId: editedContact._id,
        name: editedContact.name,
        phone: editedContact.phone,
        relationship: editedContact.relationship,
        message: editedContact.message,
        index: contactIndex
      }
    })

  }

  editContactSubmit = (contact, index) => {
    let editedContacts = this.state.contacts;
    editedContacts[index] = contact;
    this.setState({
      contacts: editedContacts
    })
  }

  editContactCancelHandler = () => {
    this.setState({editing: false})
  }

  addContactSubmit = (contact) => {
    let contacts = this.state.contacts
    contacts.push(contact)
    this.setState({contacts: contacts})
  }

  addContactHandler = () => {
    this.setState({adding: true});
  }

  addContactCancelHandler = () => {
    this.setState({adding: false});
  }

  render(){
    return(
    <Auxilary>
      <div style={{margin:'20px'}}>
      <div className = 'ContactList' style={{margin:'20px', marginTop:'100px', marginLeft:'30px', marginRight:'30px'}}>
      <Card.Group itemsPerRow={5}>
        {this.state.contacts.map( (contact, index) =>
          <Auxilary>
            <Card
                  style={{height:'100%', padding:'15px'}}
              >

               <label style={{fontWeight:'bold'}} > Name: </label>
               {contact.name}
               <label style={{fontWeight:'bold'}} > Relationship: </label>
               {contact.relationship}
               <label style={{fontWeight:'bold'}} > Number: </label>
               {contact.phone}
               <label style={{fontWeight:'bold'}} > Message: </label>
               {contact.message}
            <Button basic color ='olive' onClick = {contact => this.editContactHandler(contact, index)}>Edit</Button>
            </Card>
          </Auxilary>
      )
      }
      </Card.Group>
      </div>

      <div className = "AddContainer" style={{marginTop:'80px', marginLeft:'30px'}}>
        <Button onClick= {this.addContactHandler} className= "AddButton">+</Button>
      </div>

      </div>

      <Modal show = {this.state.adding} modalClosed = {this.addContactCancelHandler}>
        <AddContact
          userId = {this.state.userId}
          addContact = {this.addContactSubmit}
          closeModal = {this.addContactCancelHandler}
        />
      </Modal>

      <Modal show={this.state.editing} modalClosed={this.editContactCancelHandler}>
        <EditContact
          contactId = {this.state.editContact["contactId"]}
          index = {this.state.editContact["index"]}
          typedName = {this.state.editContact["name"]}
          typedRelationship = {this.state.editContact["relationship"]}
          typedNumber = {this.state.editContact["phone"]}
          typedMessage = {this.state.editContact["message"]}
          editContact = {this.editContactSubmit}
          closeModal = {this.editContactCancelHandler}
        />
      </Modal>
    </Auxilary>
    )
  }
}

  export default Kiwi;
