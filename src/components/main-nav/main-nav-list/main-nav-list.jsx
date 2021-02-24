import React from 'react';

import { NavList } from './main-nav-list-style.js';

import MainNavItem from '../main-nav-item/main-nav-item.jsx';

const MainNavList = (props) => {
  const { listData } = props;

  return (
    <NavList>
      {listData.map((itemData, index) => (
        <MainNavItem itemData={itemData} key={index} />
      ))}
    </NavList>
  );
};

export default MainNavList;
