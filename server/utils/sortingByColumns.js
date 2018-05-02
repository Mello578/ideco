let flag = false;

function sortingByColumns(column, data) {
  flag = !flag;

  switch (column) {
    case 0:
      return data.sort((a, b) => flag
        ? a.airlines.name.localeCompare(b.airlines.name)
        : b.airlines.name.localeCompare(a.airlines.name)
      );
    case 1:
      return data.sort((a, b) => flag
        ? a.airlines.flight.localeCompare(b.airlines.flight)
        : b.airlines.flight.localeCompare(a.airlines.flight)
      );
    case 2:
      return data.sort((a, b) => flag
        ? a.aircraft.typeJet.localeCompare(b.aircraft.typeJet)
        : b.aircraft.typeJet.localeCompare(a.aircraft.typeJet)
      );
    case 3:
      return data.sort((a, b) => flag
        ? a.departureCity.city.localeCompare(b.departureCity.city)
        : b.departureCity.city.localeCompare(a.departureCity.city)
      );
    case 4:
      return data.sort((a, b) => flag
        ? a.allDataTime.timeDepart.getTime() > b.allDataTime.timeDepart.getTime() ? 1 : -1
        : b.allDataTime.timeDepart.getTime() > a.allDataTime.timeDepart.getTime() ? 1 : -1
      );
    case 5:
      return data.sort((a, b) => flag
        ? a.arrivalCity.city.localeCompare(b.arrivalCity.city)
        : b.arrivalCity.city.localeCompare(a.arrivalCity.city)
      );
    case 6:
      return data.sort((a, b) => flag
        ? a.allDataTime.timeArrival.getTime() > b.allDataTime.timeArrival.getTime() ? 1 : -1
        : b.allDataTime.timeArrival.getTime() > a.allDataTime.timeArrival.getTime() ? 1 : -1
      );
    case 7:
      return data.sort((a, b) => flag
        ? a.allDataTime.expectedTime.getTime() > b.allDataTime.expectedTime.getTime() ? 1 : -1
        : b.allDataTime.expectedTime.getTime() > a.allDataTime.expectedTime.getTime() ? 1 : -1
      );
    default:
      return data
  }
}

module.exports = sortingByColumns;