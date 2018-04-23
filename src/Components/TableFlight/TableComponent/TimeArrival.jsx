import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';


class TimeArriv extends Component {

  render() {
    const dateParam = this.props.allData[this.props.idTimeArriv].allDataTime;
    const timeArrival = getTime(dateParam.timeArrival);
    return (
      <td>
        {
          `${timeArrival.getDate()} ${MONTHS[timeArrival.getMonth()]}
      ${formatTime(timeArrival.getHours())}:${formatTime(timeArrival.getMinutes())}`
        }
      </td>
    )
  }
}

export const TimeArrival = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(TimeArriv);