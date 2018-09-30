import React from 'react';

const contact = (props) => (
  <div className = 'Contact'>
    <h2 className = 'ContactName'>{props.name}</h2>
    <p>Relationship: {props.relationship}</p>
    <p>Number: {props.number}</p>
    <p>Message: {props.message}</p>
  </div>
)

export default contact;
