import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as fromById from './byId';
import comic, * as fromDetail from './comic';
import comics, * as fromComics from './comics';


export default combineReducers({
  comics,
  comic,
  router: routerReducer
})

export const getComics = (state) => {
  const ids = fromComics.getComics(state.comics);
  return ids.map(id => fromById.getComic(state.comics, id));
}

export const getComic = (state, id) =>
  fromDetail.getComic(state.comic, id) || fromById.getComic(state.comics, id);

export const getOffset = (state) =>
  fromComics.getOffset(state.comics);

export const getTotalComics = (state) =>
  fromComics.getTotalComics(state.comics);

export const getIsFetching = (state) =>
  fromComics.getIsFetching(state.comics) || fromDetail.getIsFetching(state.comic);
