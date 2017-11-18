import { Observable } from 'rxjs/Rx';
import { normalize } from 'normalizr';

import cancelActions from './utils/cancelActions';
import ajaxUntilTotal from './utils/ajaxUntilTotal';
import * as schema from '../schema';
import {
  LOCATION_CHANGE,
  CANCEL_REQUESTS,
  FETCH_COMIC_REQUEST,
  fetchComicSuccess,
  fetchComicFailure
} from '../actions';


const requests = [
  [':id', {}],
  [':id/creators', { orderBy: 'lastName' }],
  [':id/characters', { orderBy: 'name' }],
];

const comicError = (comicId) => (error) =>
  Observable.of(fetchComicFailure(comicId, error.message || 'Error Fetching Comic Detail'));

const comicSuccess = (comicId) => ([comicResponse, creatorsResponse, charactersResponse]) => {
  const { entities: { comics }} = normalize(comicResponse[0], schema.comic);
  return fetchComicSuccess(comicId, {
    [comicId]: {
      ...comics[comicId],
      creators: [...creatorsResponse],
      characters: [...charactersResponse],
    }
  });
}

/**
 * This epic will fetch "concurrently" the following items:
 *  - The comic detail
 *  - The comic creators
 *  - The comic characters
 *
 *  Because of some limitations of the api when calling the
 *  "creators" and "characters" endpoints, we can encounter that we don't get back
 *  all the "results" available in the api. Because of this, we perform as
 *  many ajax request as we need until we have all the necessary data to merge
 *  back into the "original comic" and then fire the "FETCH_COMIC_SUCCESS" action.
 */
export const fetchComicEpic = (action$, store, { ajax }) =>
  action$
    .ofType(FETCH_COMIC_REQUEST)
    .switchMap(({ comicId }) =>
      Observable.forkJoin(requests.map(ajaxUntilTotal(comicId, ajax)))
        .takeUntil(cancelActions(action$, CANCEL_REQUESTS, LOCATION_CHANGE))
        .map(comicSuccess(comicId))
        .catch(comicError(comicId))
    );
