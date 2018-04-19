import {initialState} from './initialState';

export function allDataReducer(state = initialState.allData, action) {
  switch (action.type) {
    case 'all':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}