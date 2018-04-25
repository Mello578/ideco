const {allCities} = require('../../constants/dataCityesAndAircrafts/cityes');
const randomNumber = require('./randomNumder');

function flights(){
  const allFlight = [];
  for (let i = 0; i < allCities.length; i++) {
    const flight = checkNumbAndAdd(allFlight);
    allFlight.push(flight);
  }
return allFlight;
}

function checkNumbAndAdd(allFlight) {
  const allData = allFlight;
  const flight = randomNumber(800, 200);
  if(allFlight.length === 0 || allData.indexOf(flight) === -1){
    return flight;
  }else{
    return checkNumbAndAdd(allData)
  }
}

module.exports = flights;