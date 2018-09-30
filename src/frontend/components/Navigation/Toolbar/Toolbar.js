import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className = "Toolbar">
    <div>Kiwi</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
