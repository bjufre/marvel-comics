import * as comics from '../../reducers/comics';
import * as actions from '../../actions';
import * as selectors from '../../reducers';


describe('Comics Reducer isFetching', () => {
  it('should return the initial state', () => {
    expect(comics.isFetching(undefined, {})).toEqual(false);
  });

  it('should set `isFetching: true` when a request is fired', () => {
    const action = { type: actions.FETCH_COMICS_REQUEST };
    expect(comics.isFetching(undefined, action)).toEqual(true);
  });

  it('should set `isFetching: false` when a request succeeds', () => {
    const action = { type: actions.FETCH_COMICS_SUCCESS };
    expect(comics.isFetching(true, action)).toEqual(false);
  });

  it('should set `isFetching: false` when a request fails', () => {
    const action = { type: actions.FETCH_COMICS_FAILURE };
    expect(comics.isFetching(true, action)).toEqual(false);
  });

  it('should set `isFetching: false` when location changes', () => {
    const action = { type: actions.LOCATION_CHANGE };
    expect(comics.isFetching(true, action)).toEqual(false);
  });
});

describe('Comics Reducer errorMessage', () => {
  it('should return the initial state', () => {
    expect(comics.errorMessage(undefined, {})).toEqual(null);
  });

  it('should reset the errorMessage back to null when a Request is fired', () => {
    const action = { type: actions.FETCH_COMICS_REQUEST };
    expect(comics.errorMessage('Some message', action)).toEqual(null);
  });

  it('should reset the errorMessage back to null when a request succeeds', () => {
    const action = { type: actions.FETCH_COMICS_SUCCESS };
    expect(comics.errorMessage('Some message', action)).toEqual(null);
  });

  it('should set the errorMessage whena  request fails', () => {
    const message = 'Some message';
    const action = { type: actions.FETCH_COMICS_FAILURE, message };
    expect(comics.errorMessage(null, action)).toEqual(message);
  })
});

describe('Comics Reducer meta', () => {
  it('should return the initial state', () => {
    const expected = {
      offset: 0,
      totalComics: 0,
    };
    expect(comics.meta(undefined, {})).toEqual(expected);
  });

  it('should set the total and offset when a request succeeds', () => {
    const initialState = { offset: 0, totalComics: 0 };
    const expected = {
      offset: 25,
      totalComics: 2932,
    };
    const action = {
      type: actions.FETCH_COMICS_SUCCESS,
      offset: 25,
      total: 2932,
    };

    expect(comics.meta(initialState, action)).toEqual(expected);
  });
});

describe('Comics Reducer allIds', () => {
  it('should return the initial state', () => {
    expect(comics.allIds(undefined, {})).toEqual({ids: [], originalIds: []});
  });

  it('should add the fetched ids to the array', () => {
    const initialState = { ids: [1, 2, 3], originalIds: [1, 2, 3] };
    const action = { type: actions.FETCH_COMICS_SUCCESS, response: { result: [4, 5, 6] }};
    const expected = { ids: [1, 2, 3, 4, 5, 6], originalIds: [1, 2, 3, 4, 5, 6] };

    const result = comics.allIds(initialState, action);
    expect(comics.allIds(initialState, action)).toEqual(expected);
  });

  it('should discard any repeated ids', () => {
    const initialState = { ids: [1, 2, 3], originalIds: [1, 2, 3] };
    const action = { type: actions.FETCH_COMICS_SUCCESS, response: { result: [1, 5, 6] }};
    const expected = { ids: [1, 2, 3, 5, 6], originalIds: [1, 2, 3, 1, 5, 6] };

    expect(comics.allIds(initialState, action)).toEqual(expected);
  });
});
