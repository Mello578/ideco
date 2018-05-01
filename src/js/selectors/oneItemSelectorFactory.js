import {createSelector} from 'reselect';

export const oneItemSelectorFactory = (oneFlightId, path) => {
  return createSelector(
    [
      ({allDataReducer}) => allDataReducer.data,
    ],
    (data) => {
      let currentFlight = data.find((f) => f.id === oneFlightId);

      if (currentFlight) {
        for (let oneBranch of path) {
          currentFlight = currentFlight[oneBranch];
        }
        return currentFlight;
      }
    }
  )
};