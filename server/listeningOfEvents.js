const {sendData, dataAcquisition} = require('./dataTransfer');
// const selectionOfFlights = require('../server/selectionOfFlights');
//
// let data = selectionOfFlights();

function listenOfEvents(socket) {
 // sendData(socket, data);

  socket.on('other', () => {
    dataAcquisition(socket);
  });
}

module.exports = listenOfEvents;