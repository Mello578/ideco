import {combineReducers} from 'redux';

import {allDataReducer} from './allData';
import {timeReducer} from './timeReducer';

export default combineReducers({
  allDataReducer,
  timeReducer
})