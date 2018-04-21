const {averageSpeed} = require('../constants/constants');
const randomNumber = require('../utils/randomNumder');

class OneFlight {
  constructor(id, departureCity, arrivalCity, aircraft, airlines) {
    this.id = id;
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
    this.aircraft = aircraft;
    this.airlines = airlines;
  }

  timeDepartureOrArrival() {

    //дата вылета
    const dateDep = new Date();
    const hour = 23 - randomNumber(23);
    const minutes = randomNumber(59, 0);
    dateDep.setHours(hour);
    dateDep.setMinutes(minutes);

    //дата прилета
    const dateArrival = new Date(dateDep);
    const distance = this.departureCity.distance ? this.departureCity.distance : this.arrivalCity.distance;
    const flightTime = distance / averageSpeed;
    dateArrival.setMinutes(dateArrival.getMinutes() + flightTime);

    //ожидаемое / фактическое время
    const expectedTime = new Date(dateArrival);
    expectedTime.setMinutes(expectedTime.getMinutes() + randomNumber(20, -20));

    this.allDataTime = {
      timeDepart: dateDep,
      timeArrival: dateArrival,
      expectedTime: expectedTime
    };
  }

}

module.exports = OneFlight;