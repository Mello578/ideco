import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';


class Jet extends Component {

  render() {
    console.log('typejet')
    return (
      <td>
        {this.props.typeJet}
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['aircraft', 'typeJet'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    typeJet: oneFlightSelector(state)
  }
};

export const TypeJet = connect(mapStateToProps)(Jet);