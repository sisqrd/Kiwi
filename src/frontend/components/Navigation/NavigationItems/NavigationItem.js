import React from 'react';

const navigationItem = (props) => (
  <li className = "NavigationItem">
    <a className = {props.active ? "active":null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
