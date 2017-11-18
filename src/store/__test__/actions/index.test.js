import * as actions from '../../actions';


describe('Index Actions', () => {
  it('should create an action to Cancel any flying requests', () => {
    const expected = {
      type: actions.CANCEL_REQUESTS,
    };

    expect(actions.cancelRequests()).toEqual(expected);
  });
});
