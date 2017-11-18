export const FETCH_COMICS_REQUEST = '@@marvel-comics/FETCH_COMICS_REQUEST';
export const FETCH_COMICS_SUCCESS = '@@marvel-comics/FETCH_COMICS_SUCCESS';
export const FETCH_COMICS_FAILURE = '@@marvel-comics/FETCH_COMICS_FAILURE';

export const fetchComics = (offset = 0) => ({
  type: FETCH_COMICS_REQUEST,
  offset
});

export const fetchComicsSuccess = ({ response, offset, total }) => ({
  type: FETCH_COMICS_SUCCESS,
  response,
  offset,
  total
});

export const fetchComicsFailure = message => ({
  type: FETCH_COMICS_FAILURE,
  message,
});
