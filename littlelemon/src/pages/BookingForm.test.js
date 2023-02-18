import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes', () => {
  it('returns the expected initial state', () => {
    const expectedState = {
      1: ['9:00 AM', '10:00 AM', '11:00 AM'],
      2: ['9:00 AM', '10:00 AM', '11:00 AM'],
      3: ['9:00 AM', '10:00 AM', '11:00 AM'],
      4: ['9:00 AM', '10:00 AM', '11:00 AM'],
      5: ['9:00 AM', '10:00 AM', '11:00 AM'],
      6: ['9:00 AM', '10:00 AM', '11:00 AM'],
      7: ['9:00 AM', '10:00 AM', '11:00 AM']
    };

    expect(initializeTimes()).toEqual(expectedState);
  });
});

describe('updateTimes', () => {
  it('returns the same state value', () => {
    const initialState = {
      1: ['9:00 AM', '10:00 AM', '11:00 AM'],
      2: ['9:00 AM', '10:00 AM', '11:00 AM'],
      3: ['9:00 AM', '10:00 AM', '11:00 AM'],
      4: ['9:00 AM', '10:00 AM', '11:00 AM'],
      5: ['9:00 AM', '10:00 AM', '11:00 AM'],
      6: ['9:00 AM', '10:00 AM', '11:00 AM'],
      7: ['9:00 AM', '10:00 AM', '11:00 AM']
    };

    const newState = updateTimes(initialState, 1);

    expect(newState).toEqual(initialState);
  });
});
