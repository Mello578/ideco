import {initialState} from './initialState';
const {VISIBLE} = require('../../../../constants/constants');

export function barControlReducer(state = initialState.visibleBarControl, action) {
  switch (action.type) {
    case VISIBLE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}