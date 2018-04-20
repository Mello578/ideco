const {averageSpeed} = require('../constants/constants');

class OneFlights {
  constructor(departureCity, arrivalCity, aircraft, airlines){
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
    this.aircraft = aircraft;
    this.airlines = airlines;
  }
}

module.exports = OneFlights;