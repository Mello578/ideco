import {createSelector} from 'reselect';

export const oneItemSelectorFactory = (oneFlight, path) => {
  return createSelector(
    [
      ({allDataReducer}) => allDataReducer.data,
    ],
    (data) => {
      let currentFlight = data.find((f) => f.id === oneFlight.id);
      for (let oneBranch of path) {
        currentFlight = currentFlight[oneBranch];
      }
      return currentFlight;
    }
  )
};