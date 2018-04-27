import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTHS} from '../../../../constants/months';
import {formatTime} from '../../../js/utils/formatTime';
import {getTime} from '../../../js/utils/getTime';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class TimeDepart extends Component {

  render() {
    const timeDepart = getTime(this.props.timeDeparture);
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

const mapStateToProps = (state, {data}) => {
  const path = ['allDataTime', 'timeDepart'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    timeDeparture: oneFlightSelector(state)
  }
};

export const TimeDeparture = connect(mapStateToProps)(TimeDepart);