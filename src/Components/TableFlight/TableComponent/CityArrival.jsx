import React, {Component} from 'react';
import {connect} from 'react-redux';


class CityArriv extends Component {

  render() {
    const {arrivalCity} = this.props.allData[this.props.idCityArriv];
    return (
      <td>
        {arrivalCity.city}
      </td>
    )
  }
}

export const CityArrival = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(CityArriv);