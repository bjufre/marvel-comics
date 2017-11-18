import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import marvelReducer from './reducers';
import { fetchComicsEpic } from './epics/comics';
import { fetchComicEpic } from './epics/comic';


const rootEpic = combineEpics(
  fetchComicsEpic,
  fetchComicEpic
);

export default () => {
  const history = createHistory();
  const middlewares = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic, {
      dependencies: { ajax }
    }),
  ];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    marvelReducer,
    applyMiddleware(...middlewares)
  );

  return { store, history };
}
