const {DC, allCities} = require('../constants/dataCityesAndAircrafts/cityes'),
  allAirlines = require('../constants/dataCityesAndAircrafts/airlines'),
  allAircrafts = require('../constants/dataCityesAndAircrafts/aircrafts');

const randomElement = require('./utils/randomElement');

const OneFlight = require('../classes/OneFlight');

const flights = require('./utils/flight');

function selectionOfFlights() {
  const allFlights = flights();
  const arrayAllFlight = [];
  for (let currentCity of allCities) {
    const id = currentCity.id;
    const variableOfSelect = Math.round(Math.random() * 1000) % 2;
    const departureCity = !variableOfSelect ? DC : currentCity;
    const arrivalCity = variableOfSelect ? DC : currentCity;
    const plane = selectOfPlain(currentCity);
    const airlines = randomElement(allAirlines);
    airlines.flight += allFlights[id];
    arrayAllFlight.push(new OneFlight(id, departureCity, arrivalCity, plane, airlines));
    arrayAllFlight[id].timeDepartureOrArrival();
  }
  return arrayAllFlight;
}

/**
 * подбираем самолет у которого хватит дальности полета долететь до города
 * @param city
 */
function selectOfPlain(city) {
  const currentCity = city;
  let plane = randomElement(allAircrafts);
  if (plane.maxRange - currentCity.distance > 700) {    //запас расстояния которое может еще пролететь самолет при посадке
    return plane
  } else {
    return selectOfPlain(currentCity);
  }
  return plane
}

module.exports = selectionOfFlights;