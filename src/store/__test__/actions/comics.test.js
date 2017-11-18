import * as actions from '../../actions';


describe('Comics Actions', () => {
  it('should create an action to start Request', () => {
    const expected = {
      type: actions.FETCH_COMICS_REQUEST,
      offset: 0
    };

    expect(actions.fetchComics()).toEqual(expected);
  });

  it('should pass the offset to create an action to start Request', () => {
    const expected = {
      type: actions.FETCH_COMICS_REQUEST,
      offset: 25
    };

    expect(actions.fetchComics(25)).toEqual(expected);
  });

  it('should create an action to notify Request was successful', () => {
    const total = 1;
    const offset = 25;
    const response = 'Some response';
    const expected = {
      type: actions.FETCH_COMICS_SUCCESS,
      response,
      offset,
      total,
    };

    expect(actions.fetchComicsSuccess({ response, total, offset })).toEqual(expected);
  });

  it('should create an action to notify Request failed', () => {
    const message = 'Failed to Fetch';
    const expected = {
      type: actions.FETCH_COMICS_FAILURE,
      message,
    };

    expect(actions.fetchComicsFailure(message)).toEqual(expected);
  });
});
