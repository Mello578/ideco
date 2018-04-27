import React, {Component} from 'react';
import {connect} from 'react-redux';
import {flightStatusSelectorFactory} from '../../../js/selectors/flightStatusSelectorFactory';

class TableStatus extends Component {

  render() {
    return <td>
             <span id={`status-${this.props.flightStatus}`}>
               {this.props.status}
             </span>
    </td>
  }
}

const mapStateToPropsFactory = (state, {flightStatus}) => {
  const flightStatusSelector = flightStatusSelectorFactory(flightStatus);

  return (state) => {
    return {
      status: flightStatusSelector(state),
    };
  }
};

export const Status = connect(mapStateToPropsFactory)(TableStatus);