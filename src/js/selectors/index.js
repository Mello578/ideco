import {createSelector} from 'reselect';

const currentTime = (state) => state.currentTime;

export const  setStatus = createSelector(
  [currentTime, id],
  (time, id)=>{

  }
);