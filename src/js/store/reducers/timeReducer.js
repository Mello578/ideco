import {initialState} from './initialState';
import {SET_CURRENT_TIME} from '../../../../constants/constants';

export function timeReducer(state = initialState.currentTime, action) {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}