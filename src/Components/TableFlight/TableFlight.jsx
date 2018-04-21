import React, {Component} from 'react';
import {connect} from 'react-redux';
import {allDataReducer} from '../../js/store/reducers/allData';
import style from './index.css';
import {MONTHS} from '../../../constants/months';
import {formatTime} from '../../js/utils/formatTime';

const {TABLE_HEADER} = require('../../../constants/constants');

class Table extends Component {

  tableContent(allData) {
    let {timeDepart, timeArrival, expectedTime} = allData.allDataTime;
    timeDepart = new Date(timeDepart);
    timeArrival = new Date(timeArrival);
    expectedTime = new Date(expectedTime);


    const arrayContent = [
      <img src={allData.airlines.logo}
           alt={allData.airlines.name}
           title={allData.airlines.name}
           className={'table-flight--logo-airlines'}/>,
      allData.airlines.flight,
      allData.aircraft.typeJet,
      allData.departureCity.city,
      `${timeDepart.getDate()} 
      ${MONTHS[timeDepart.getMonth()]} 
      ${formatTime(timeDepart.getHours())}:${formatTime(timeDepart.getMinutes())}
      `,
      allData.arrivalCity.city,
      `${timeArrival.getDate()} 
      ${MONTHS[timeArrival.getMonth()]} 
      ${formatTime(timeArrival.getHours())}:${formatTime(timeArrival.getMinutes())}
      `,
      `
      ${formatTime(expectedTime.getHours())}:${formatTime(expectedTime.getMinutes())}`
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
              <tr key={key} style={{background: key % 2 === 0 ? '' : '#e3e3e3'}}>
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