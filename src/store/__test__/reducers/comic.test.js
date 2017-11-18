import * as actions from '../../actions';
import * as selectors from '../../reducers';
import * as comic from '../../reducers/comic';


describe('Comics Reducer isFetching', () => {
  it('should return the initial state', () => {
    expect(comic.isFetching(undefined, {})).toEqual(false);
  });

  it('should set `isFetching: true` when a request is fired', () => {
    const action = { type: actions.FETCH_COMIC_REQUEST };
    expect(comic.isFetching(undefined, action)).toEqual(true);
  });

  it('should set `isFetching: false` when a request succeeds', () => {
    const action = { type: actions.FETCH_COMIC_SUCCESS };
    expect(comic.isFetching(true, action)).toEqual(false);
  });

  it('should set `isFetching: false` when a request fails', () => {
    const action = { type: actions.FETCH_COMIC_FAILURE };
    expect(comic.isFetching(true, action)).toEqual(false);
  });

  it('should set `isFetching: false` when location changes', () => {
    const action = { type: actions.LOCATION_CHANGE };
    expect(comic.isFetching(true, action)).toEqual(false);
  });
});

describe('Comics Reducer errorMessage', () => {
  it('should return the initial state', () => {
    expect(comic.errorMessage(undefined, {})).toEqual(null);
  });

  it('should reset the errorMessage back to null when a Request is fired', () => {
    const action = { type: actions.FETCH_COMIC_REQUEST };
    expect(comic.errorMessage('Some message', action)).toEqual(null);
  });

  it('should reset the errorMessage back to null when a request succeeds', () => {
    const action = { type: actions.FETCH_COMIC_SUCCESS };
    expect(comic.errorMessage('Some message', action)).toEqual(null);
  });

  it('should set the errorMessage whena  request fails', () => {
    const message = 'Some message';
    const action = { type: actions.FETCH_COMIC_FAILURE, message };
    expect(comic.errorMessage(null, action)).toEqual(message);
  });
});

describe('Comics Reducer detail', () => {
  it('should return the initial state', () => {
    expect(comic.detail(undefined, {})).toEqual(null);
  });

  it('should return the fetched comic', () => {
    const response = 'Awesome response';
    const action = { type: actions.FETCH_COMIC_SUCCESS, response }
    expect(comic.detail(undefined, action)).toEqual(response);
  });

  it('should reset the comic to null', () => {
    const initial = 'Awesome response';
    const action = { type: actions.LOCATION_CHANGE }
    expect(comic.detail(initial, action)).toEqual(null);
  });
});
