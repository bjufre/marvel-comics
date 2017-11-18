import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import Core from './core';
import Comics from './comics';
import ComicDetail from './comic';


const Root = ({ history, store }) => (
  <Provider store={store}>
    <Core history={history}>
      <Route path="/" component={Comics} />
      <Route path="/:id" component={ComicDetail} />
    </Core>
  </Provider>
);

export default Root;
