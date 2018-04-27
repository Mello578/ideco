import {createSelector} from 'reselect';

export const oneFlightSelectorFactory = (oneFlight) => {
  return createSelector(
    [
      ({allDataReducer}) => allDataReducer.data,
    ],
    (data) => {
      return data.find((f) => f.id === oneFlight.id);
    }
  )
};