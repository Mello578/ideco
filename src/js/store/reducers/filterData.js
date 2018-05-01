import {initialState} from './initialState';
import {FILTER_DATA} from '../../../../constants/constants';

export function filterDataReducer(state = initialState.filterData, action) {
  switch (action.type) {
    case FILTER_DATA:
      return action.payload;
    default:
      return state;
  }
}