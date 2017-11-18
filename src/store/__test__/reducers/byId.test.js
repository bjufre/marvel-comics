import * as actions from '../../actions';
import byId from '../../reducers/byId';
import * as selectors from '../../reducers';


describe('byId Reducer', () => {
  it('should return the initial state', () => {
    expect(byId(undefined, {})).toEqual({});
  });

  it('should add comics to the `lookup table`', () => {
    const comic = {
      id: 1,
      title: 'Spiderman #13',
    };
    const action = {
      type: actions.FETCH_COMICS_SUCCESS,
      response: {
        entities: {
          comics: {
            1: comic
          }
        }
      }
    }
    const expected = { 1: comic };

    expect(byId(undefined, action)).toEqual(expected);
  });

  it('should add comics to the `lookup table` merging them', () => {
    const comic = { id: 1, title: 'Spiderman #13' };
    const comicTwo = { id: 2, title: 'Spiderman #15' };
    const initialState = { 1: comic };
    const action = {
      type: actions.FETCH_COMICS_SUCCESS,
      response: {
        entities: {
          comics: {
            1: {...comic, title: 'Spiderman #14'},
            2: comicTwo,
          }
        }
      }
    }
    const expected = { 1: {
      id: 1,
      title: 'Spiderman #14',
    }, 2: comicTwo };

    expect(byId(initialState, action)).toEqual(expected);
  });
});
