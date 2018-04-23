import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';

const {TABLE_HEADER} = require('../../../constants/constants');

import {LogoAirlines} from './TableComponent/LogoAirlines';
import {Airlines} from './TableComponent/Airlines';
import {TypeJet} from './TableComponent/TypeJet';
import {CityDeparture} from './TableComponent/CityDeparture';
import {TimeDeparture} from './TableComponent/TimeDeparture';
import {CityArrival} from './TableComponent/CityArrival';
import {TimeArrival} from './TableComponent/TimeArrival';
import {TimeExpected} from './TableComponent/TimeExpected';
import {Status} from './TableComponent/Status';

class Table extends Component {
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
                <LogoAirlines data={item}/>
                <Airlines data={item}/>
                <TypeJet data={item}/>
                <CityDeparture data={item}/>
                <TimeDeparture data={item}/>
                <CityArrival data={item}/>
                <TimeArrival data={item}/>
                <TimeExpected data={item}/>
                <Status flightId={item.id}/>
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