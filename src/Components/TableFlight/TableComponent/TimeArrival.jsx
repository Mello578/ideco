import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class TimeArriv extends Component {

  render() {
    const timeArrival = this.props.timeArrival ? getTime(this.props.timeArrival) : '';
    const date = timeArrival
      ? `${timeArrival.getDate()} ${MONTHS[timeArrival.getMonth()]}
      ${formatTime(timeArrival.getHours())}:${formatTime(timeArrival.getMinutes())}`
      : '';
    return (
      <td>
        {
          date
        }
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['allDataTime', 'timeArrival'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    timeArrival: oneFlightSelector(state)
  }
};

export const TimeArrival = connect(mapStateToProps)(TimeArriv);