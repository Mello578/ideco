import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {getSelectedFlight} from '../BarControl/BarControl';

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

  visibleBarControl(flight){
    const {visible} = this.props;
    const newVisible = barControlAction(!visible);
    this.props.setVisible(newVisible);
    getSelectedFlight(flight);
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
              <tr key={key} style={{background: key % 2 === 0 ? '' : '#e3e3e3'}} onClick={()=>this.visibleBarControl(item)}>
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

export const TableFlight = connect(({allDataReducer, barControlReducer}) =>
  ({
    allData: allDataReducer.data,
    visible: barControlReducer.data,
  }),
  dispatch => ({
    setVisible(mode){
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(Table);