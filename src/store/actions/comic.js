export const FETCH_COMIC_REQUEST = '@@marvel-comics/FETCH_COMIC_REQUEST';
export const FETCH_COMIC_SUCCESS = '@@marvel-comics/FETCH_COMIC_SUCCESS';
export const FETCH_COMIC_FAILURE = '@@marvel-comics/FETCH_COMIC_FAILURE';

export const fetchComic = comicId => ({
  type: FETCH_COMIC_REQUEST,
  comicId
});

export const fetchComicSuccess = (comicId, response) => ({
  type: FETCH_COMIC_SUCCESS,
  response,
  comicId
});

export const fetchComicFailure = (comicId, message) => ({
  type: FETCH_COMIC_FAILURE,
  message,
  comicId,
});
