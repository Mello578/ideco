const {sendData, dataAcquisition} = require('./dataTransfer');
const {UPDATE_DATA, FILTER_DATA} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');
const compareDate = require('./utils/compareDate');
const updateData = require('./utils/updateData');
const filterCity = require('./utils/filter');

let allData = selectionOfFlights().sort(compareDate);

function listenOfEvents(socket) {
  sendData(socket, allData);

  socket.on(UPDATE_DATA, (data) => {
    allData = updateData(allData, data).sort(compareDate);
    dataAcquisition(socket, allData);
  });

  socket.on(FILTER_DATA, (params) => {
    const data = filterCity(allData, params);
    dataAcquisition(socket, data);
  });
}

module.exports = listenOfEvents;