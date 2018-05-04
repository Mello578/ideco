import {SET_NUMB_ROWS} from '../../../../constants/constants';

export function setNumbRowsAction( payload) {
  return {
    type: SET_NUMB_ROWS,
    payload
  }
}