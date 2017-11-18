import {
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE,
  fetchComics,
  fetchComicsSuccess,
  fetchComicsFailure
} from './comics';
import {
  FETCH_COMIC_REQUEST,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_FAILURE,
  fetchComic,
  fetchComicSuccess,
  fetchComicFailure
} from './comic';


const LOCATION_CHANGE = "@@router/LOCATION_CHANGE";
const CANCEL_REQUESTS = "@@marvel-comics/CANCEL_REQUESTS";

const cancelRequests = () => ({
  type: CANCEL_REQUESTS,
});

export {
  // Action types
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE,

  FETCH_COMIC_REQUEST,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_FAILURE,

  CANCEL_REQUESTS,
  LOCATION_CHANGE,

  // Action creators
  cancelRequests,

  fetchComics,
  fetchComicsSuccess,
  fetchComicsFailure,

  fetchComic,
  fetchComicSuccess,
  fetchComicFailure,
}
