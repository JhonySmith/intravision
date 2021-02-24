import React, { Fragment } from 'react';
import MainPage from './components/main-page/main-page.jsx';
import GlobalStyles from './global-styles/global-style.js';

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyles />
      <MainPage />
    </Fragment>
  );
};

export default App;
