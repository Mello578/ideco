const {DC, allCities} = require('./dataCityesAndAircrafts/cityes'),
  allAirlines = require('./dataCityesAndAircrafts/airlines'),
  allAircrafts = require('./dataCityesAndAircrafts/aircrafts');

const randomElement = require('./utils/randomElement');

const OneFlights = require('./classes/OneFlights');


function selectionOfFlights() {
  const arrayAllFlight = [];
  for (let currentCity of allCities) {
    const variableOfSelect = Math.round(Math.random() * 1000) % 2;
    const departureCity = !variableOfSelect ? DC : currentCity;
    const arrivalCity = variableOfSelect ? DC : currentCity;
    const plane = selectOfPlain(currentCity);
    const airlines = randomElement(allAirlines);
    arrayAllFlight.push(new OneFlights(departureCity, arrivalCity, plane, airlines))
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