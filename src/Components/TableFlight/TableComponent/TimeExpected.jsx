import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';

export class TimeExpected extends Component {

  render() {
    const dateParam = this.props.data.allDataTime;
    const expectedTime = getTime(dateParam.expectedTime);
    return (
      <td>
        {
          `${formatTime(expectedTime.getHours())}:${formatTime(expectedTime.getMinutes())}`
        }
      </td>
    )
  }
}