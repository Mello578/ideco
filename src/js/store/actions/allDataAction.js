import {UPDATE_DATA} from '../../../../constants/constants';

export function allDataAction(data) {
  return {
    type: UPDATE_DATA,
    data
  }
}