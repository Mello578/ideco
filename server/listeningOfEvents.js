const numb = require('./test');
const {sendData, dataAcquisition} = require('./dataTransfer');

function listenOfEvents(socket) {
  sendData(socket, numb());

  socket.on('other', () => {
    dataAcquisition(socket);
  });
}

module.exports = listenOfEvents;