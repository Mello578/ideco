const {sendData, dataAcquisition} = require('./dataTransfer');
const {UPDATE_DATA, FILTER_DATA, SORTING_DATA, DELETED_FLIGHT, CREATE_FLIGHT} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');
const compareDate = require('./utils/compareDate');
const updateData = require('./utils/updateData');
const filterCity = require('./utils/filter');
const addNewFlight = require('./utils/addNewFlight');
const sortingByColumns = require('./utils/sortingByColumns');

let allData = selectionOfFlights().sort(compareDate);

function listenOfEvents(socket) {
  sendData(socket, allData);

  socket.on(UPDATE_DATA, (data, params) => {
    allData = updateData(allData, data).sort(compareDate);
    const filteredData = filterCity(allData, params);
    dataAcquisition(socket, filteredData);
  });

  socket.on(FILTER_DATA, (params) => {
    const filteredData = filterCity(allData, params);
    dataAcquisition(socket, filteredData);
  });

  socket.on(SORTING_DATA, (column, params) => {
    const filteredData = filterCity(allData, params);
    const sortingData = sortingByColumns(column, filteredData);
    dataAcquisition(socket, sortingData);
  });

  socket.on(DELETED_FLIGHT, (id) => {
    allData = allData.filter((item) => item.id !== id);
    dataAcquisition(socket, allData);
  });

  socket.on(CREATE_FLIGHT, (newFlight, params)=>{
    const a = addNewFlight(allData, newFlight)
    allData.push(a);
    const filteredData = filterCity(allData, params);
    dataAcquisition(socket, filteredData);
  })
}


module.exports = listenOfEvents;