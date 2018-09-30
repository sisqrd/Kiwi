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
    adding: false,
    editing: false,
    contacts: [],
    editContact: {
      name: '',
      number: '',
      relationship: '',
      typedMessage: ''
    }
  }

  componentDidMount() {
    let contacts = []
    const userData = firebase.database().ref().child('userData/'+this.props.userKey)
    userData.once('value')
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const childData = childSnapshot.val()
        if (childData.name != undefined) {
        let emergencyContact = {
          name: childData.name,
          number: childData.number,
          relationship: childData.relationship,
          typedMessage: childData.typedMessage
        }
        contacts.push(emergencyContact)
        this.setState({contacts: contacts})
      }
      })
    })
  }

  // editContactSubmit =

  editContactHandler = (contact, index) => {
    console.log(index)
    console.log(this.state.contacts[index])
    let editedContact = this.state.contacts[index];
    let contactIndex = index;

    this.setState({
      editing: true,
      editContact: {
        name: editedContact.name,
        number: editedContact.number,
        relationship: editedContact.relationship,
        typedMessage: editedContact.typedMessage
      }
    })
    // let contacts = []
    // const userData = firebase.database().ref().child('userData/'+this.props.userKey)
    // userData.once('value')
    // .then(snapshot => {
    //   snapshot.forEach(childSnapshot => {
    //     const childData = childSnapshot.val()
    //     if (childData.name != undefined) {
    //       contacts.push(childData)
    //   }
    //   })
    //   console.log(contacts)
    // })
  }

  editContactSubmit = (contact) => {

  }

  editContactCancelHandler = () => {
    this.setState({editing: false})
  }

  addContactSubmit = (contact) => {
    let contacts = this.state.contacts
    // const userData = firebase.database().ref('userData/'+this.props.userKey);
    // userData.push(contact)
    contacts.push(contact)
    this.setState({contacts: contacts})
    console.log(this.state.contacts)
    axios.post('/contacts', {
      contacts: this.state.contacts
    })
    .then(response => {
    console.log(response);
    })
    .catch(error => {
    console.log(error.response);
    });
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
      <div className = 'ContactList' style={{margin:'20px', marginLeft:'30px', marginRight:'30px'}}>
      <Card.Group itemsPerRow={5}>
        {this.state.contacts.map( (contact, index) =>
          <Auxilary>
            <Card
                  style={{height:'100%'}}
              >

               <label style={{fontWeight:'bold'}} > Name: </label> 
               {contact.name}
               <label style={{fontWeight:'bold'}} > Relationship: </label> 
               {contact.relationship}
               <label style={{fontWeight:'bold'}} > Number: </label> 
               {contact.number}
               <label style={{fontWeight:'bold'}} > Message: </label> 
               {contact.typedMessage}
            <Button basic color ='olive' onClick = {contact => this.editContactHandler(contact, index)}>Edit</Button>
            </Card> 
          </Auxilary>
      )
      }
      </Card.Group> 
      </div>

      <div className = "AddContainer">
        <button onClick= {this.addContactHandler} className= "AddButton">+</button>
      </div>

      <Modal show = {this.state.adding} modalClosed = {this.addContactCancelHandler}>
        <AddContact
          addContact = {this.addContactSubmit}
          closeModal = {this.addContactCancelHandler}
        />
      </Modal>

      <Modal show={this.state.editing} modalClosed={this.editContactCancelHandler}>
        <EditContact
          typedName = {this.state.editContact["name"]}
          typedRelationship = {this.state.editContact["relationship"]}
          typedNumber = {this.state.editContact["number"]}
          typedMessage = {this.state.editContact["typedMessage"]}
          editContact = {this.editContactSubmit}
          closeModal = {this.editContactCancelHandler}
        />
      </Modal>
    </Auxilary>
    )
  }
}

  export default Kiwi;
