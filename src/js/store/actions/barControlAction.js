import {VISIBLE} from '../../../../constants/constants';

export function barControlAction(payload) {
  return {
    type: VISIBLE,
    payload
  }
}