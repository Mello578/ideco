const {sendData, dataAcquisition} = require('./dataTransfer');
const {UPDATE_DATA} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');
const compareDate = require('./utils/compareDate');
const updateData = require('./utils/updateData');

let allData = selectionOfFlights().sort(compareDate);

function listenOfEvents(socket) {
  sendData(socket, allData);

  socket.on(UPDATE_DATA, (data) => {
    allData = updateData(allData, data).sort(compareDate);
    dataAcquisition(socket, allData);
  });
}

module.exports = listenOfEvents;