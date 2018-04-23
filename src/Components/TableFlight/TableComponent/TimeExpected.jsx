import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';

class TimeExp extends Component {

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

export const TimeExpected = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(TimeExp);