import {combineReducers} from 'redux';

import {allDataReducer} from './allData';
import {timeReducer} from './timeReducer';
import {barControlReducer} from './barControlReducer';

export default combineReducers({
  allDataReducer,
  timeReducer,
  barControlReducer
})