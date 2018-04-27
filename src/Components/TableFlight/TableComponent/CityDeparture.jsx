import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';

class Departure extends Component {

  render() {
    return (
      <td>
        {this.props.departureCity}
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['departureCity', 'city'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    departureCity: oneFlightSelector(state)
  }
};

export const CityDeparture = connect(mapStateToProps)(Departure);