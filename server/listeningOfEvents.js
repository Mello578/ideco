const numb = require('./test');
const {UPDATE_DATA} = require('../constants/constants');

function listenOfEvents(socket) {
  socket.emit(UPDATE_DATA, numb());
  socket.on('other', function () {
    socket.emit(UPDATE_DATA, numb());
  });
}

module.exports = listenOfEvents;