import React, {Component} from 'react';
import {connect} from 'react-redux';
import {allDataReducer} from '../../js/store/reducers/allData';
import style from './index.css';

const {TABLE_HEADER} = require('../../../constants/constants');


class Table extends Component {

  tableContent(allData) {
    const arrayContent = [
      allData.airlines.name,
      allData.airlines.flight,
      allData.departureCity.city,
      allData.arrivalCity.city,
      allData.aircraft.typeJet,
    ];

    return arrayContent;
  }

  render() {
    return (
      <table className={'table-flight'}>
        <thead className={'table-flight--header'}>
        <tr>
          {
            TABLE_HEADER.split(',').map((item, key) => {
              return (<th key={key}>
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
              <tr key={key}>
                {
                  this.tableContent(item).map((content, key) => {
                    return (
                      <td key={key}>
                        {content}
                      </td>
                    )
                  })
                }
              </tr>
            )
          }) : ''
        }
        </tbody>
      </table>
    )
  }
}

export const TableFlight = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(Table);