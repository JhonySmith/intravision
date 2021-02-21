import React from 'react';
import { NavBar } from './main-nav-styles.js';
import Logo from '../logo/logo.jsx';
import MainNavList from './main-nav-list/main-nav-list.jsx';
import { navListData as listData } from '../../mocks/nav-list-mocks.js';

const MainNav = () => {
  return (
    <NavBar>
      <Logo />
      <MainNavList listData={listData} />
    </NavBar>
  );
};

export default MainNav;
