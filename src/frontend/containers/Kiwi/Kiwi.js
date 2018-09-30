import React, {Component} from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Contact from './Contacts/Contact';
import Modal from '../../components/UI/Modal';
import Auxilary from '../../highorder/Auxilary';
import EditContact from './Contacts/EditContact';
import AddContact from './Contacts/AddContact';

class Kiwi extends Component {

  state = {
    adding: false,
    editing: false,
    contacts: []
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

  editContactHandler = (index) => {
    console.log(index)
    console.log(this.state.contacts[index])
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

  editContactCancelHandler = () => {
    this.setState({editing: false})
  }

  addContactSubmit = (contact) => {
    let contacts = this.state.contacts
    const userData = firebase.database().ref('userData/'+this.props.userKey);
    userData.push(contact)
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
      <div className = 'ContactList'>
        {this.state.contacts.map( (contact, index) =>
          <Auxilary>
            <Contact
              key = {contact.number}
              name = {contact.name}
              relationship = {contact.relationship}
              number = {contact.number}
              message = {contact.typedMessage}
            />
            <button onClick = {(index) => this.editContactHandler(index)}>Edit</button>
          </Auxilary>
      )
      }
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
          editContact = {this.editContactSubmit}
          closeModal = {this.editContactCancelHandler}
        />
      </Modal>
    </Auxilary>
    )
  }
}

  export default Kiwi;
