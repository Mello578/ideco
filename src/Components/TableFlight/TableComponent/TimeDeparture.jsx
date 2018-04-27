import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class TimeDepart extends Component {

  render() {
    const timeDepart = this.props.timeDeparture ? getTime(this.props.timeDeparture) : '';
    const date = timeDepart
      ? `${timeDepart.getDate()} ${MONTHS[timeDepart.getMonth()]}
          ${formatTime(timeDepart.getHours())}:${formatTime(timeDepart.getMinutes())}`
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
  const path = ['allDataTime', 'timeDepart'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    timeDeparture: oneFlightSelector(state)
  }
};

export const TimeDeparture = connect(mapStateToProps)(TimeDepart);