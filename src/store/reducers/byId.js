import { FETCH_COMICS_SUCCESS } from '../actions';

const byId = (state = {}, action) => {
  if (action.response && action.type === FETCH_COMICS_SUCCESS) {
    return ({
      ...state,
      ...action.response.entities.comics,
    });
  }

  return state;
}

export default byId;

export const getComic = (state, id) => state.byId[id];
