import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className = "Toolbar">
    <div className = "ToolbarLogo">
      <Logo />
      <div className = "Title">Kiwi</div>
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
