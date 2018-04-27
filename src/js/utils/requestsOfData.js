import {PORT, UPDATE_DATA, GET_DATA, FILTER_DATA} from '../../../constants/constants';
import {allDataAction} from '../store/actions/allDataAction';
import {store} from '../../index';

import io from 'socket.io-client';

let socket = io(`http://localhost:${PORT}`);

export function addAllData(data) {
  const allData = allDataAction(data);
  store.dispatch({type: allData.type, payload: allData.data});
}

export function updateData(data) {
  if(data){
    socket.emit(UPDATE_DATA, data);
  }
}

export function filerData(data) {
  if(data){
    socket.emit(FILTER_DATA, data);
  }
}

(()=>{
  socket.on(GET_DATA, function (data) { //прослушка + запуск функции для получения данных
    addAllData(data);
  });
})();
