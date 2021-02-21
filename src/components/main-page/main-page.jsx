import React, { Fragment } from 'react';

import MainNav from '../main-nav/main-nav.jsx';
import Search from '../search/search.jsx';

import { MainPageBlock, ContentSection } from './main-page-styles.js';

const MainPage = () => {
  return (
    <MainPageBlock>
      <MainNav></MainNav>
      <ContentSection>
        <Search></Search>
      </ContentSection>
    </MainPageBlock>
  );
};

export default MainPage;
