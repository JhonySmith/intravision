import React from 'react';

import MainNav from '../main-nav/main-nav.jsx';
import TasksBlock from '../tasks-block/tasks-block.jsx';

import { MainPageBlock } from './main-page-styles.js';

const MainPage = () => {
  return (
    <MainPageBlock>
      <MainNav></MainNav>
      <TasksBlock />
    </MainPageBlock>
  );
};

export default MainPage;
