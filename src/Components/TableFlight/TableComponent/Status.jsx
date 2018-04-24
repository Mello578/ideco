import React, {Component} from 'react';
import {connect} from 'react-redux';
import {flightStatusSelectorFactory} from '../../../js/selectors';

class TableStatus extends Component {

  render() {
    return <td>
             <span>
               {this.props.status}
             </span>
          </td>
  }
}

const mapStateToPropsFactory = (state, {flightId}) => {
  const flightStatusSelector = flightStatusSelectorFactory(flightId);

  return (state) => {
    return {
      status: flightStatusSelector(state),
    };
  }
};

export const Status = connect(mapStateToPropsFactory)(TableStatus);