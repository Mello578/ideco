import React, {Component} from 'react';
import {connect} from 'react-redux';
import {flightStatusSelectorFactory} from '../../../js/selectors/flightStatusSelectorFactory';

class TableStatus extends Component {

  render() {
    return <td>
             <span id={`status-${this.props.data}`}>
               {this.props.status}
             </span>
    </td>
  }
}

const mapStateToPropsFactory = (state, {data}) => {
  const flightStatusSelector = flightStatusSelectorFactory(data);

  return (state) => {
    return {
      status: flightStatusSelector(state),
    };
  }
};

export const Status = connect(mapStateToPropsFactory)(TableStatus);