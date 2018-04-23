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

module.exports = compareDate;