import React from 'react';

const editcontact = (props) => (
  <div className = 'EditContact'>
    <h2 className = 'ContactName'>{props.name}</h2>
    <p>Relationship: {props.relationship}</p>
    <p>Number: {props.number}</p>
    <p>Message: {props.message}</p>
    <button>Submit</button>
  </div>
)

export default editcontact;
