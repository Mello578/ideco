import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';

class TimeExpect extends Component {

  render() {
    const expectedTime = getTime(this.props.timeExpected);
    return (
      <td>
        {
          `${formatTime(expectedTime.getHours())}:${formatTime(expectedTime.getMinutes())}`
        }
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['allDataTime', 'expectedTime'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    timeExpected: oneFlightSelector(state)
  }
};

export const TimeExpected = connect(mapStateToProps)(TimeExpect);