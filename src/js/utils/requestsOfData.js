import {PORT, UPDATE_DATA, GET_DATA, FILTER_DATA, SORTING_DATA, DELETED_FLIGHT, CREATE_FLIGHT} from '../../../constants/constants';
import {allDataAction} from '../store/actions/allDataAction';
import {store} from '../../index';

import io from 'socket.io-client';

let socket = io(`http://localhost:${PORT}`);

export function addAllData(data) {
  const allData = allDataAction(data);
  store.dispatch({type: allData.type, payload: allData.data});
}

export function updateData(data, filterData) {
  socket.emit(UPDATE_DATA, data, filterData);
}

export function filterData(data) {
  socket.emit(FILTER_DATA, data);
}

export function sortingData(column, filterData) {
  socket.emit(SORTING_DATA, column, filterData)
}

export function deleteFlight(id) {
  socket.emit(DELETED_FLIGHT, id)
}

export function createFlight(id, filterData) {
  socket.emit(CREATE_FLIGHT, id, filterData)
}

(() => {
  socket.on(GET_DATA, function (data) { //прослушка + запуск функции для получения данных
    addAllData(data);
  });
})();
