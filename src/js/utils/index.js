let elem;
import {PORT, UPDATE_DATA} from '../../../constants/constants';

import io from 'socket.io-client';

let socket = io(`http://localhost:${PORT}`);

document.addEventListener("DOMContentLoaded", ()=>{
  elem = document.getElementById('test');
});

export function test(data) {
    if(elem){
      elem.innerHTML = data;
    }
}

export function testClick() {
    socket.emit('other');
}

socket.on(UPDATE_DATA, function (data) { //прослушка + запуск функции при изменении данных
  test(data);
});