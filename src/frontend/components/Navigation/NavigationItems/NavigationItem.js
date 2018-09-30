import React from 'react';

const navigationItem = (props) => (
  <li className = "NavigationItem">
    <button className = {props.active ? "active":null}>
      {props.children}
    </button>
  </li>
);

export default navigationItem;
