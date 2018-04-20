const numb = require('./test');
const {sendData, dataAcquisition} = require('./dataTransfer');
const selectionOfFlights = require('../server/selectionOfFlights');

function listenOfEvents(socket) {
  sendData(socket, selectionOfFlights());

  socket.on('other', () => {
    dataAcquisition(socket);
  });
}

module.exports = listenOfEvents;