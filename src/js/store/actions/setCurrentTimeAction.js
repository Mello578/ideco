import {SET_CURRENT_TIME} from '../../../../constants/constants';

export function setCurrentTimeAction(data) {
  return {
    type: SET_CURRENT_TIME,
    data
  }
}