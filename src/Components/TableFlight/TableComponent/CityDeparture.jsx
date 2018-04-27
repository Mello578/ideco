import React, {Component} from 'react';

export class CityDeparture extends Component {

  render() {
    const {departureCity} = this.props.data;
    return (
      <td>
        {departureCity.city}
      </td>
    )
  }
}