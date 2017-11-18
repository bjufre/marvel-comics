import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ActionsObservable, createEpicMiddleware } from 'redux-observable';

import * as actions from '../../actions';
import { fetchComicsEpic } from '../../epics/comics';


const createAction$ = offset => ActionsObservable.of(
  { type: actions.FETCH_COMICS_REQUEST, offset }
)

describe('fetchComicsEpic', () => {

  it('should fetch comics', () => {
    const results = [];
    const finalOffset = 0;
    const total = 2932;
    const action$ = createAction$(0);
    const payload = { response: { data: { results, total }}};
    const ajax = () => Observable.of(payload);

    fetchComicsEpic(action$, null, { ajax })
      .toArray()
      .subscribe(calledActions => {
        expect(calledActions).toEqual([
          { type: actions.FETCH_COMICS_SUCCESS, response: { entities: {}, result: [] }, total, offset: finalOffset },
        ]);
      });
  });

  it('should call FETCH_COMICS_FAILURE when the request fails', () => {
    const action$ = createAction$(0);
    const error = { message: 'Test error' };
    const ajax = () => Observable.throw(error);

    fetchComicsEpic(action$, null, { ajax })
      .toArray()
      .subscribe(calledActions => {
        expect(calledActions).toEqual([
          { type: actions.FETCH_COMICS_FAILURE, message: error.message },
        ])
      });
  });
});
