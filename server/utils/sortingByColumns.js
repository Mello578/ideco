function sortingByColumns(column, data) {
  let allData = data;
  let sortedData;
  switch (column) {
    case 0:
      sortedData = allData.sort((one, two) => one.airlines.name.localeCompare(two.airlines.name));
      break;
    case 1:
      sortedData = allData.sort((one, two) => one.airlines.flight.localeCompare(two.airlines.flight));
      break;
    case 2:
      sortedData = allData.sort((one, two) => one.aircraft.typeJet.localeCompare(two.aircraft.typeJet));
      break;
    case 3:
      sortedData = allData.sort((one, two) => one.departureCity.city.localeCompare(two.departureCity.city));
      break;
  }
  return sortedData;
}

module.exports = sortingByColumns;