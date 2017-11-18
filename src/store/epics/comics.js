import { Observable } from 'rxjs/Rx';
import { normalize } from 'normalizr';

import buildUrl from './utils/buildUrl';
import cancelActions from './utils/cancelActions';
import * as schema from '../schema';
import {
  CANCEL_REQUESTS,
  LOCATION_CHANGE,
  FETCH_COMICS_REQUEST,
  fetchComicsSuccess,
  fetchComicsFailure
} from '../actions';


const comicsRequest = (offset = 0) => ({
  method: 'GET',
  crossDomain: true,
  url: buildUrl('/comics', {
    offset,
    limit: 25,
    format: 'comic',
    noVariants: true,
    formatType: 'comic',
    orderBy: 'onsaleDate',
  })
});

const comicsError = (error) =>
  Observable.of(fetchComicsFailure(error.message || 'Error Fetching Comics List'));

const comicsSuccess = (action) => ({ results = [], total = 0 }) => {
  const offset = action.offset + results.length;
  return fetchComicsSuccess({
    response: normalize(results, schema.arrayOfComics),
    offset,
    total,
  });
};

export const fetchComicsEpic = (action$, store, { ajax }) =>
    action$
      .ofType(FETCH_COMICS_REQUEST)
      .switchMap(action =>
        ajax(comicsRequest(action.offset))
          .pluck('response').pluck('data')
          .takeUntil(cancelActions(action$, LOCATION_CHANGE, CANCEL_REQUESTS))
          .map(comicsSuccess(action))
          .catch(comicsError)
      );
