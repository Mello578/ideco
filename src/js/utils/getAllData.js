import {PORT, UPDATE_DATA} from '../../../constants/constants';
import {allDataAction} from '../store/actions/allDataAction';
import {store} from '../../index';

import io from 'socket.io-client';

let socket = io(`http://localhost:${PORT}`);

export function addAllData(data) {
  localStorage.setItem('allData', JSON.stringify(data));
  const allData = allDataAction(data);
  store.dispatch({type: allData.type, payload: allData.data});
}

export function updateData() {
    socket.emit('other');
}

socket.on(UPDATE_DATA, function (data) { //прослушка + запуск функции при изменении данных
  addAllData(data);
});