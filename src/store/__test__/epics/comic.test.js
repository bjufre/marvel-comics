import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ActionsObservable, createEpicMiddleware } from 'redux-observable';

import * as actions from '../../actions';
import { fetchComicEpic } from '../../epics/comic';


const createAction$ = comicId => ActionsObservable.of(
  { type: actions.FETCH_COMIC_REQUEST, comicId }
)

describe('fetchComicEpic', () => {
  it('should fetch the comic', () => {
    const comicId = 1;
    const results = [
      { id: 1, title: 'Spiderman (1998) #13', prices: [{price: 0}] },
    ];
    const action$ = createAction$(comicId);
    const payload = { response: { data: { results }} };
    const ajax = () => Observable.of(payload);
    const creators = results;
    const characters = results;

    fetchComicEpic(action$, null, { ajax })
      .toArray()
      .subscribe(calledActions => {
        expect(calledActions).toMatchSnapshot();
      });
  });

  it('should call FETCH_COMIC_FAILURE when the request fails', () => {
    const comicId = 1;
    const action$ = createAction$(comicId);
    const error = { message: 'Test error' };
    const ajax = () => Observable.throw(error);

    fetchComicEpic(action$, null, { ajax })
      .toArray()
      .subscribe(calledActions => {
        expect(calledActions).toMatchSnapshot();
      });
  });
});
