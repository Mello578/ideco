const OneFlight = require('../../classes/OneFlight');
const allAirlines = require('../../constants/dataCityesAndAircrafts/airlines');

function addNewFlight(allFlights, newAddFlight) {
  const {departureCity, arrivalCity, aircraft, airlines, allDataTime} = newAddFlight;
  const maxId = Math.max.apply(null, allFlights.map((item) => item.id));
  const id = selectId(allFlights, maxId);
  const newFlight = new OneFlight(id, departureCity, arrivalCity, aircraft, airlines);
  newFlight.allDataTime = {
    timeDepart: new Date(allDataTime.timeDepart),
    timeArrival: new Date(allDataTime.timeArrival),
    expectedTime: new Date(allDataTime.expectedTime)
  };

  if (newFlight.status !== undefined && newFlight.status !== '') {
    newFlight.status = newFlight.status;
  }
  newFlight.airlines.logo = allAirlines.find((item) => item.name === newFlight.airlines.name).logo;
  return newFlight;
}

function selectId(allData, lastId) {
  const data = allData;
  let id = lastId + 1;
  if (id !== 49) {
    return id;
  } else {
    return selectId(data, id)
  }
}

module.exports = addNewFlight;