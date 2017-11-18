import { combineReducers } from 'redux';
import uniq from 'lodash.uniq';

import byId from './byId';

import {
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE
} from '../actions/comics';
import createErrorReducer from './createErrorReducer';
import createFetchingReducer from './createFetchingReducer';


const allIdsInitialState = { ids: [], originalIds: [] };

export const allIds = (state = allIdsInitialState, action) => {
  switch (action.type) {
    case FETCH_COMICS_SUCCESS:
      return {
        ids: uniq([...state.ids, ...action.response.result]),
        originalIds: [...state.originalIds, ...action.response.result]
      };
    default:
      return state;
  }
}

const metaInitialState = {
  offset: 0,
  totalComics: 0,
}

export const meta = (state = metaInitialState, action) => {
  switch (action.type) {
    case FETCH_COMICS_SUCCESS:
      return {
        ...state,
        offset: action.offset,
        totalComics: action.total,
      }
    default:
      return state;
  }
}

export const isFetching = createFetchingReducer([
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE,
]);

export const errorMessage = createErrorReducer([
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE,
]);

export default combineReducers({
  meta,
  byId,
  allIds,
  isFetching,
  errorMessage,
});

export const getComics = (state) => state.allIds.ids;
export const getDumpingIds = (state) => state.allIds.originalIds;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
export const getOffset = (state) => state.meta.offset;
export const getTotalComics = (state) => state.meta.totalComics;
