const {UPDATE_DATA} = require('../constants/constants');
const numb = require('./test');


function sendData(socket, data){
  socket.emit(UPDATE_DATA, data);
}

function dataAcquisition(socket){
  sendData(socket, numb());
}

module.exports = {
  sendData: sendData,
  dataAcquisition: dataAcquisition
};