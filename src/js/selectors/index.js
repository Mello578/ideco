import {createSelector} from 'reselect';
import {STATUS_FLIGHT} from '../../../constants/statusFlight';

const MIN = 60 * 1000;

export const flightStatusSelectorFactory = (flightId) => {
  return createSelector(
    [
      ({timeReducer}) => timeReducer.data,
      ({allDataReducer}) => allDataReducer.data,
    ],
    (currentTime, flights) => {
      const {
        allDataTime: {
          timeDepart,
          timeArrival,
          expectedTime,
        },
        status
      } = flights.find((f) => f.id === flightId);

      const currentTimeTimestamp = currentTime.getTime();
      const timeDepartTimestamp = new Date(timeDepart).getTime();
      const timeArrivalTimestamp = new Date(timeArrival).getTime();
      const expectedTimeTimestamp = new Date(expectedTime).getTime();

      const timeBeforeBoarding = timeDepartTimestamp - 50 * MIN;
      const timeNowBoarding = timeDepartTimestamp - 30 * MIN;
      const timeFlew = timeDepartTimestamp - 5 * MIN;
      const timeFlies = timeArrivalTimestamp - 5 * MIN;

      if(status === undefined){
        switch (true){
          case currentTimeTimestamp < timeBeforeBoarding:
            return STATUS_FLIGHT.beforeBoarding;
            break;
          case currentTimeTimestamp < timeNowBoarding:
            return STATUS_FLIGHT.nowBoarding;
            break;
          case currentTimeTimestamp < timeFlew:
            return STATUS_FLIGHT.flew;
            break;
          case currentTimeTimestamp > timeFlew && currentTimeTimestamp < timeFlies:
            return STATUS_FLIGHT.flies;
            break;
          case currentTimeTimestamp > expectedTimeTimestamp:
            return STATUS_FLIGHT.landed;
            break;
        }
      }else{
        return STATUS_FLIGHT.cancelled;
      }
    }
  );
};