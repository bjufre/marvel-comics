import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import Root from './Root';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';


const { store, history } = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
