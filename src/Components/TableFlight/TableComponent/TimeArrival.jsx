import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class TimeArriv extends Component {

  render() {
    const timeArrival = getTime(this.props.timeArrival);
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

const mapStateToProps = (state, {data}) => {
  const path = ['allDataTime', 'timeArrival'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    timeArrival: oneFlightSelector(state)
  }
};

export const TimeArrival = connect(mapStateToProps)(TimeArriv);