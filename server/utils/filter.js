function filterCity(allData, filterElements) {
  const data = allData;
  const {cityDepart, cityArrival} = filterElements;
  let newData = data.filter((item)=> item.departureCity.city.toLowerCase().indexOf(cityDepart.toLowerCase()) > -1);
  newData = newData.filter((item)=> item.arrivalCity.city.toLowerCase().indexOf(cityArrival.toLowerCase()) > -1);

  return newData;
}

module.exports = filterCity;