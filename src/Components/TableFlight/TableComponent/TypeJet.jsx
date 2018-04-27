import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneFlightSelectorFactory} from '../../../js/selectors/oneFlightSelectorFactory';


class Jet extends Component {

  render() {
    const {aircraft} = this.props.flight;
    console.log('typejet')
    return (
      <td>
        {aircraft.typeJet}
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const oneFlightSelector = oneFlightSelectorFactory(data);
  return {
    flight: oneFlightSelector(state)
  }
};

export const TypeJet = connect(mapStateToProps)(Jet);