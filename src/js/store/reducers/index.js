import {combineReducers} from 'redux';

import {allDataReducer} from './allData';
import {timeReducer} from './timeReducer';
import {barControlReducer} from './barControlReducer';
import {filterDataReducer} from './filterData';
import {numbRowsReducer} from './numbRowsReducer';

export default combineReducers({
  allDataReducer,
  timeReducer,
  barControlReducer,
  filterDataReducer,
  numbRowsReducer
})