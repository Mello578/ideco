const {sendData, dataAcquisition} = require('./dataTransfer');
const {UPDATE_DATA, FILTER_DATA, SORTING_DATA, DELETED_FLIGHT, CREATE_FLIGHT} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');
const compareDate = require('./utils/compareDate');
const updateData = require('./utils/updateData');
const filterCity = require('./utils/filter');
const addNewFlight = require('./utils/addNewFlight');
const sortingByColumns = require('./utils/sortingByColumns');

const MINUTES = 1000 * 60;

let fullData = selectionOfFlights();
let allSortTimeData = timeFilterData(fullData).sort(compareDate);

function listenOfEvents(socket) {
  sendData(socket, timeFilterData(allSortTimeData));

  socket.on(UPDATE_DATA, (data, params) => {
    allSortTimeData = updateData(allSortTimeData, data).sort(compareDate);
    const filteredData = filterCity(allSortTimeData, params);
    dataAcquisition(socket, timeFilterData(filteredData));
    fullData = updateData(fullData, data);
  });

  socket.on(FILTER_DATA, (params) => {
    const filteredData = filterCity(allSortTimeData, params);
    dataAcquisition(socket, filteredData);
  });

  socket.on(SORTING_DATA, (column, params) => {
    const filteredData = filterCity(allSortTimeData, params);
    const sortingData = sortingByColumns(column, filteredData);
    dataAcquisition(socket, sortingData);
  });

  socket.on(DELETED_FLIGHT, (id) => {
    allSortTimeData = allSortTimeData.filter((item) => item.id !== id);
    dataAcquisition(socket, timeFilterData(allSortTimeData));
    fullData = fullData.filter((item) => item.id !== id);
  });

  socket.on(CREATE_FLIGHT, (newFlight, params)=>{
    const a = addNewFlight(allSortTimeData, newFlight);
    allSortTimeData.push(a);
    fullData.push(a);
    const filteredData = filterCity(allSortTimeData, params);
    dataAcquisition(socket, timeFilterData(filteredData));
  })
}

function timeFilterData(data) {
  let allData = data;
  const date = new Date();
  const filteredData = allData.filter((item) => date.getTime() - item.allDataTime.expectedTime.getTime() < 30 * MINUTES);
  return filteredData;
}

module.exports = listenOfEvents;