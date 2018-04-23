const {UPDATE_DATA} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');
const compareDate = require('./utils/compareDate');

function sendData(socket, data){
  socket.emit(UPDATE_DATA, data);
}

function dataAcquisition(socket){
  sendData(socket, selectionOfFlights().sort(compareDate));
}

module.exports = {
  sendData: sendData,
  dataAcquisition: dataAcquisition
};