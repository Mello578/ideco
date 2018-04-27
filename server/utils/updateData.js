const OneFlight = require('../../classes/OneFlight');

function updateData(allData, editedObject) {
  const {id, departureCity, arrivalCity, aircraft, airlines, allDataTime} = editedObject;
  const newFlight = new OneFlight(id, departureCity, arrivalCity, aircraft, airlines);
  newFlight.allDataTime = {
    timeDepart: new Date(allDataTime.timeDepart),
    timeArrival: new Date(allDataTime.timeArrival),
    expectedTime: new Date(allDataTime.expectedTime)
  };
  const updatingAllData = allData.filter((item) => item.id !== id);
  updatingAllData.push(newFlight);

  return updatingAllData
}

module.exports = updateData;