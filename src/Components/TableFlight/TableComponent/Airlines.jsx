import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';

class AirlinesName extends Component {

  render() {
    return (
      <td>
        {this.props.flight}
      </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const path = ['airlines', 'flight'];
  const oneFlightSelector = oneItemSelectorFactory(data, path);
  return {
    flight: oneFlightSelector(state)
  }
};

export const Airlines = connect(mapStateToProps)(AirlinesName);
