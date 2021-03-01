import React from 'react';

import { NavList } from './main-nav-list-style.js';

import MainNavItem from '../main-nav-item/main-nav-item.jsx';

const MainNavList = (props) => {
  const { listData, currentPage, setCurrentPage } = props;

  return (
    <NavList>
      {listData.map((itemData, index) => (
        <MainNavItem
          itemData={itemData}
          active={currentPage === itemData.page}
          setCurrentPage={setCurrentPage}
          key={index}
        />
      ))}
    </NavList>
  );
};

export default MainNavList;
