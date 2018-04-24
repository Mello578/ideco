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
          expectedTime,
        },
        status
      } = flights.find((f) => f.id === flightId);

      const currentTimeTimestamp = currentTime.getTime();
      const timeDepartTimestamp = new Date(timeDepart).getTime();
      const expectedTimeTimestamp = new Date(expectedTime).getTime();

      const timeBeforeBoarding = timeDepartTimestamp - 50 * MIN;
      const timeFlew = timeDepartTimestamp - 10 * MIN;
      const timeEndFlew = timeDepartTimestamp + 5 * MIN;

      if(status === undefined){
        switch (true){
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
      }else{
        return status; // возвращаем статус, т.к. дает больше гибкости. Пр-ры статусов которые не нужно автоматически менять: Отменен, Совмещен, Поломка. Либо делать доп поле для комментариев
      }
    }
  );
};