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

      const data = flights.find((f) => f.id === flightId);
      const timeDepart = data ? data.allDataTime.timeDepart : undefined;
      const expectedTime = data ? data.allDataTime.expectedTime : undefined;

      const currentTimeTimestamp = currentTime.getTime();
      let status,
        timeDepartTimestamp,
        expectedTimeTimestamp,
        timeBeforeBoarding,
        timeFlew,
        timeEndFlew;

      if (data) {
        status = data.status;
        timeDepartTimestamp = new Date(timeDepart).getTime();
        expectedTimeTimestamp = new Date(expectedTime).getTime();
        timeBeforeBoarding = timeDepartTimestamp - 50 * MIN;
        timeFlew = timeDepartTimestamp - 10 * MIN;
        timeEndFlew = timeDepartTimestamp + 5 * MIN;
      }

      if (status === undefined) { //нужно задать статусы которые автоматом перебираются
        switch (true) {
          case currentTimeTimestamp < timeBeforeBoarding:
            return STATUS_FLIGHT.beforeBoarding;
            break;
          case currentTimeTimestamp < timeFlew:
            return STATUS_FLIGHT.nowBoarding;
            break;
          case currentTimeTimestamp > timeFlew && currentTimeTimestamp < timeEndFlew:
            return STATUS_FLIGHT.flew;
            break;
          case currentTimeTimestamp > timeEndFlew && currentTimeTimestamp < expectedTimeTimestamp:
            return STATUS_FLIGHT.flies;
            break;
          case currentTimeTimestamp > expectedTimeTimestamp:
            return STATUS_FLIGHT.landed;
            break;
        }
      }
      else {
        return 'status'; // возвращаем статус, т.к. дает больше гибкости. Пр-ры статусов которые не нужно автоматически менять: Отменен, Совмещен, Поломка. Либо делать доп поле для комментариев
      }
    }
  );
};