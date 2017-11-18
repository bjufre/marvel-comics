import { LOCATION_CHANGE } from "../actions/index";


export default ([requestAction, successAction, failureAction]) => {
  return function isFetching(state = false, action) {
    switch (action.type) {
      case requestAction:
        return true;
      case successAction:
      case failureAction:
      case LOCATION_CHANGE:
        return false;
      default:
        return state;
    }
  }
}
