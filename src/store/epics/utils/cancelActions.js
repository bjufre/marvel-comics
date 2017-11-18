import { Observable } from 'rxjs/Rx';


/**
 * This functions gets the observable of actions from the store
 * and a list of actions that we subscribe to in order to
 * cancel any ajax requests.
 * This works by merging any `action$` with the correct `ofType`.
 */
export default (action$, ...actions) => {
  const toCancel = actions.map(action => action$.ofType(action));
  return Observable.merge(...toCancel);
};