import React, {Component} from 'react';
import {connect} from 'react-redux';


class CityDepart extends Component {

  render() {
    const {departureCity} = this.props.data;
    return (
      <td>
        {departureCity.city}
      </td>
    )
  }
}

export const CityDeparture = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(CityDepart);