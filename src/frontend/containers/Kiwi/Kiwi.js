import React, {Component} from 'react';
import Contact from './Contacts/Contact';
import Modal from '../../components/UI/Modal';
import Auxilary from '../../highorder/Auxilary';
import EditContact from './Contacts/EditContact';
import AddContact from './Contacts/AddContact';

let arr = [
  {
  name: 'Perry',
  relationship: 'friend',
  number: '+12405996788',
  message: 'yeeeeeeer'},
  {
  name: 'Mikee',
  relationship: 'friend',
  number: '+12405996788',
  message: 'yeeeeeeer'},
  {
  name: 'Perry',
  relationship: 'friend',
  number: '+12405996788',
  message: 'yeeeeeeer'}]

class Kiwi extends Component {

  state = {
    adding: false,
    editing: false,
    contacts: []
  }


  componentDidMount() {
    this.setState({contacts: arr})
  }

  addContactSubmit = (contact) => {
    console.log('THIS IS BEING CALLED');
    let newArr = this.state.contacts.slice();
    newArr.push(contact);
    this.setState({
      contacts: newArr
    })
  }

  addContactHander = () => {
    this.setState({
      adding: true
    });
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
              message = {contact.message}
            />
            <button onClick = {(contact, index) => this.editContactHandler(index)}>Edit</button>
          </Auxilary>
      )
      }
      </div>

      <div className = "AddContainer">
        <button onClick= {this.addContactHander} className= "AddButton">+</button>
      </div>

      <Modal show = {this.state.adding} modalClosed = {this.addContactCancelHandler}>
        <AddContact
          addContact = {this.addContactSubmit}
          closeModal = {this.addContactCancelHandler}
        />
      </Modal>
    </Auxilary>
    )
  }
}

  export default Kiwi;
