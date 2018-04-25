const {GET_DATA} = require('../constants/constants');

function sendData(socket, data){
  socket.emit(GET_DATA, data);
}

function dataAcquisition(socket, data){
  sendData(socket, data);
  console.log('выззвался дата апдейт')
}

module.exports = {
  sendData: sendData,
  dataAcquisition: dataAcquisition
};