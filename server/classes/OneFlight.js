const {averageSpeed} = require('../constants/constants');
const randomNumber = require('../utils/randomNumder');
const months = require('../constants/months');

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
      timeArrival: dateArrival,
      dateArrival: `
      ${dateArrival.getDate()} 
      ${months[dateArrival.getMonth()]} 
      ${this.formatTime(dateArrival.getHours())}:${dateArrival.getMinutes()}
      `,
      expectedTime: `
      ${this.formatTime(expectedTime.getHours())}:${this.formatTime(expectedTime.getMinutes())}`
    };
  }

  formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
}

module.exports = OneFlight;