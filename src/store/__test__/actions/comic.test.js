import * as actions from '../../actions';


describe('Comic Actions', () => {
  it('should create an action to start Request', () => {
    const comicId = 1;
    const expected = {
      type: actions.FETCH_COMIC_REQUEST,
      comicId,
    };

    expect(actions.fetchComic(comicId)).toEqual(expected);
  });

  it('should create an action to notify Request was successful', () => {
    const comicId = 1;
    const response = 'Some response';
    const expected = {
      type: actions.FETCH_COMIC_SUCCESS,
      response,
      comicId,
    };

    expect(actions.fetchComicSuccess(comicId, response)).toEqual(expected);
  });

  it('should create an action to notify Request failed', () => {
    const comicId = 1;
    const message = 'Failed to Fetch';
    const expected = {
      type: actions.FETCH_COMIC_FAILURE,
      message,
      comicId,
    };

    expect(actions.fetchComicFailure(comicId, message)).toEqual(expected);
  });
});
