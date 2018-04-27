import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class Arrival extends Component {

  render() {
    return (
      <td>
        {this.props.arrivalCity}
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['arrivalCity', 'city'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    arrivalCity: oneFlightSelector(state)
  }
};

export const CityArrival = connect(mapStateToProps)(Arrival);