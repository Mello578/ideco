const {UPDATE_DATA} = require('../constants/constants');
const selectionOfFlights = require('../server/selectionOfFlights');



function sendData(socket, data){
  socket.emit(UPDATE_DATA, data);
}

function dataAcquisition(socket){
  sendData(socket, selectionOfFlights());
}

module.exports = {
  sendData: sendData,
  dataAcquisition: dataAcquisition
};