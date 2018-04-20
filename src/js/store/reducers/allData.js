import {initialState} from './initialState';
import {UPDATE_DATA} from '../../../../constants/constants';

export function allDataReducer(state = initialState.allData, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}