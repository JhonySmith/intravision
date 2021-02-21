import React from 'react';
import { NavItem, NavItemLink } from './main-nav-item-styles.js';

const MainNavItem = (props) => {
  const { itemData } = props;

  return (
    <NavItem>
      <NavItemLink itemData={itemData}>{itemData.text}</NavItemLink>
    </NavItem>
  );
};

export default MainNavItem;
