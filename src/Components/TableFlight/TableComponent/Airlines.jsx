import React, {Component} from 'react';
import {connect} from 'react-redux';


class AirlinesName extends Component {

  render() {
    const {airlines} = this.props.allData[this.props.idAirlines];
    return (
      <td>
        {airlines.flight}
      </td>
    )
  }
}

export const Airlines = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(AirlinesName);