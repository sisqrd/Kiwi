import React, {Component} from 'react';
import firebase from 'firebase';
import Contact from './Contacts/Contact';
import Modal from '../../components/UI/Modal';
import Auxilary from '../../highorder/Auxilary';
import EditContact from './Contacts/EditContact';
import AddContact from './Contacts/AddContact';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

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
      <div className = 'ContactList' style={{display:'flex', padding:'20px', margin:'20px'}}>
      <Card.Group itemsPerRow={5}>
        {this.state.contacts.map( (contact, index) =>
          <div style={{padding:'20px'}}> 
            <Card >
            <Contact
              key = {contact.number}
            />
              <Card.Content style={{padding:'10px'}}>
              <label style={{fontWeight:'bold'}} > Name: </label> 
               {contact.name}
               <label style={{fontWeight:'bold'}} > Relationship: </label> 
                {contact.relationship}
                <label style={{fontWeight:'bold'}} > Contact Number: </label> 
                {contact.number}
                <label style={{fontWeight:'bold'}} > Message: </label> 
                {contact.typedMessage}
               
              </Card.Content>
              <Button basic color='olive' onClick = {(index) => this.editContactHandler(index)}>Edit</Button>
    
          </Card>
            {/* <Contact
              key = {contact.number}
              name = {contact.name}
              relationship = {contact.relationship}
              number = {contact.number}
              message = {contact.typedMessage}
            />
            <button onClick = {(index) => this.editContactHandler(index)}>Edit</button> */}
            </div> 
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
          editContact = {this.editContactSubmit}
          closeModal = {this.editContactCancelHandler}
        />
      </Modal>
    </Auxilary>
    )
  }
}

  export default Kiwi;
