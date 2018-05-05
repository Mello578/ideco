import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {TableBody} from './TableBody';
import {sortingData} from '../../js/utils/requestsOfData';
import {pagination} from '../../js/utils/pagination';

const {TABLE_HEADER} = require('../../../constants/constants');

class Table extends Component {

  sortingByColumns(e) {
    sortingData(e.target.cellIndex, this.props.filterData);
  }

  componentDidUpdate() {
    window.onload = () => {
      pagination();
    };
    pagination(this.props.numberRows);
  }

  render() {

    return (
      <table className={'table-flight'} id={'tableFlight'}>
        <thead className={'table-flight--header'}>
        <tr>
          {
            TABLE_HEADER.split(',').map((item, key) => {
              return (<th key={key} onClick={(e) => this.sortingByColumns(e)}>
                {item}
              </th>)
            })
          }
        </tr>
        </thead>
        <tbody className={'table-flight--body'}>
        {
          this.props.allData ? this.props.allData.map((item, key) => {
            return (
              <TableBody oneFlight={item} key={item.id} backgroundSort={key}/>
            )
          }) : ''
        }
        </tbody>

      </table>
    )
  }
}

export const TableFlight = connect(({allDataReducer, filterDataReducer, numbRowsReducer}) =>
  ({
    allData: allDataReducer.data,
    filterData: filterDataReducer,
    numberRows: numbRowsReducer
  })
)(Table);