import React, {Component} from 'react';
import {connect} from 'react-redux';


export class CityArrival extends Component {

  render() {
    const {arrivalCity} = this.props.data;
    return (
      <td>
        {arrivalCity.city}
      </td>
    )
  }
}