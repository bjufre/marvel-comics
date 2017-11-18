import { combineReducers } from "redux";

import createErrorReducer from "./createErrorReducer";
import createFetchingReducer from "./createFetchingReducer";
import {
  LOCATION_CHANGE,
  FETCH_COMIC_REQUEST,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_FAILURE
} from "../actions/index";


export const detail = (state = null, action) => {
  switch (action.type) {
    case FETCH_COMIC_SUCCESS:
      return action.response;
    case LOCATION_CHANGE:
    case FETCH_COMIC_REQUEST:
    case FETCH_COMIC_FAILURE:
      return null;
    default:
      return state;
  }
};

export const isFetching = createFetchingReducer([
  FETCH_COMIC_REQUEST,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_FAILURE
]);

export const errorMessage = createErrorReducer([
  FETCH_COMIC_REQUEST,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_FAILURE
]);

export default combineReducers({
  detail,
  isFetching,
  errorMessage
});

export const getComic = (state, id) => state.detail ? state.detail[id] : state.detail;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
