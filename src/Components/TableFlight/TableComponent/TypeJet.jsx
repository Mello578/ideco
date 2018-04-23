import React, {Component} from 'react';
import {connect} from 'react-redux';


class Jet extends Component {

  render() {
    const {aircraft} = this.props.data;
    return (
      <td>
        {aircraft.typeJet}
      </td>
    )
  }
}

export const TypeJet = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(Jet);