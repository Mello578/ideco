import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';


export class TimeArrival extends Component {

  render() {
    const dateParam = this.props.data.allDataTime;
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