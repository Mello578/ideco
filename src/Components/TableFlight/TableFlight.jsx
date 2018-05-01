import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {getSelectedFlight} from '../BarControl/BarControl';
import {TableBody} from './TableBody';

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
import {barControlAction} from '../../js/store/actions/barControlAction';

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
              <TableBody oneFlight={item} key={item.id} backgroundSort={key}/>
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
    allData: allDataReducer.data,
  })
)(Table);