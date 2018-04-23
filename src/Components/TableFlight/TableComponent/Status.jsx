import React, {Component} from 'react';
import {connect} from 'react-redux';


class TableStatus extends Component {

  render() {
    return <td>
             <span>
              noneSt
             </span>
          </td>
  }
}

export const Status = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(TableStatus);