import React from 'react';
import { NavItem, NavItemLink } from './main-nav-item-styles.js';

const MainNavItem = (props) => {
  const { itemData, active, setCurrentPage } = props;

  return (
    <NavItem
      active={active}
      onClick={(evt) => {
        evt.preventDefault();
        setCurrentPage(itemData.page);
      }}
    >
      <NavItemLink itemData={itemData}>{itemData.text}</NavItemLink>
    </NavItem>
  );
};

export default MainNavItem;
