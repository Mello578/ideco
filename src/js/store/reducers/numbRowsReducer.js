import {initialState} from './initialState';
import {SET_NUMB_ROWS} from '../../../../constants/constants';

export function numbRowsReducer(state = initialState.numbRows, action) {
  switch (action.type) {
    case SET_NUMB_ROWS:
      return action.payload;
    default:
      return state;
  }
}