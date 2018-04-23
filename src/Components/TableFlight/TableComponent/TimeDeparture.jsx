import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';


class TimeDepart extends Component {

  render() {
    const dateParam = this.props.allData[this.props.idTimeDepart].allDataTime;
    const timeDepart = getTime(dateParam.timeDepart);
    return (
      <td>
        {
          `${timeDepart.getDate()} ${MONTHS[timeDepart.getMonth()]}
          ${formatTime(timeDepart.getHours())}:${formatTime(timeDepart.getMinutes())}`
        }
      </td>
    )
  }
}

export const TimeDeparture = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(TimeDepart);