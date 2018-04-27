import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';


export class TimeDeparture extends Component {

  render() {
    const dateParam = this.props.data.allDataTime;
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