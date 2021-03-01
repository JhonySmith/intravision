import React, { useState } from 'react';

import MainNav from '../main-nav/main-nav.jsx';
import TasksBlock from '../tasks-block/tasks-block.jsx';
import KnowlageBase from '../knowlage-base/knowlage-base';
import Actives from '../actives/actives';
import Workers from '../workers/workers';
import Clients from '../clients/clients';
import Settings from '../settings/settings';

import { MainPageBlock } from './main-page-styles.js';

import { PAGE_LISTS } from '../../mocks/nav-list-mocks.js';

function MainPage() {
  const [currentPage, setCurrentPage] = useState(PAGE_LISTS.APPLICATIONS);

  function setPage() {
    switch (currentPage) {
      case PAGE_LISTS.KNOWLAGE_BASE:
        return <KnowlageBase />;
      case PAGE_LISTS.ASSETS:
        return <Actives />;
      case PAGE_LISTS.WORKERS:
        return <Workers />;
      case PAGE_LISTS.CLIENTS:
        return <Clients />;
      case PAGE_LISTS.SETTINGS:
        return <Settings />;
      default:
        return <TasksBlock />;
    }
  }

  return (
    <MainPageBlock>
      <MainNav currentPage={currentPage} setCurrentPage={setCurrentPage}></MainNav>
      {setPage()}
    </MainPageBlock>
  );
}

export default MainPage;
