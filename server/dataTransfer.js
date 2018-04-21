const {UPDATE_DATA} = require('../constants/constants');
let selectionOfFlights = require('../server/selectionOfFlights');

/**
 * Изначальная сортировка. Если самолет взлетает из екатеринбурга, то берется время взлета, если садится в екатеринбурге, то время посадки
 * @param elementOne
 * @param elementTwo
 * @returns {number}
 */
function compareDate(elementOne, elementTwo){
  const timeOne = elementOne.departureCity.id === 49 ? elementOne.allDataTime.timeDepart : elementOne.allDataTime.timeArrival;
  const timeTwo = elementTwo.departureCity.id === 49 ? elementTwo.allDataTime.timeDepart : elementTwo.allDataTime.timeArrival;
  return timeOne - timeTwo;
}

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