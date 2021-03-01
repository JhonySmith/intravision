import React from 'react';
import { NavBar } from './main-nav-styles.js';
import Logo from '../logo/logo.jsx';
import MainNavList from './main-nav-list/main-nav-list.jsx';
import { navListData as listData } from '../../mocks/nav-list-mocks.js';

const MainNav = (props) => {
  const { currentPage, setCurrentPage } = props;

  return (
    <NavBar>
      <Logo />
      <MainNavList listData={listData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </NavBar>
  );
};

export default MainNav;
