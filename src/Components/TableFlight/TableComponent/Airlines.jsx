import React, {Component} from 'react';
import {connect} from 'react-redux';


class AirlinesName extends Component {

  render() {
    const {airlines} = this.props.data;
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