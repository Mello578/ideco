import {FILTER_DATA} from '../../../../constants/constants';

export function filterDataAction(payload) {
  return {
    type: FILTER_DATA,
    payload
  }
}