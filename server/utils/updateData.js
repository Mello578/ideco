const OneFlight = require('../../classes/OneFlight');

function updateData(allData, editedObject) {
  const {id, departureCity, arrivalCity, aircraft, airlines, allDataTime} = editedObject;
  const newObject = new OneFlight(id, departureCity, arrivalCity, aircraft, airlines);
  newObject.allDataTime = {
    timeDepart: new Date(allDataTime.timeDepart),
    timeArrival: new Date(allDataTime.timeArrival),
    expectedTime: new Date(allDataTime.expectedTime)
  };
  const filterData = allData.filter((item) => item.id !== id);
  filterData.push(newObject);

  return filterData;
}

module.exports = updateData;