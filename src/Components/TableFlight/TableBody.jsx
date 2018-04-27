import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {getSelectedFlight} from '../BarControl/BarControl';
import {oneItemSelectorFactory} from '../../js/selectors/oneItemSelectorFactory'

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

class Body extends Component {

  visibleBarControl(flight, status) {
    const {visible} = this.props;
    this.props.setVisible(!visible);
    getSelectedFlight(flight, status);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.oneFlight !== this.props.oneFlight;
  }

  render() {
    console.log('body')
    const {backgroundSort, oneFlight} = this.props;
    return (
      <tr style={{background: backgroundSort % 2 === 0 ? '' : '#e3e3e3'}}
          onClick={() => this.visibleBarControl(oneFlight, Status)}>
        <LogoAirlines data={oneFlight}/>
        <Airlines data={oneFlight}/>
        <TypeJet data={oneFlight}/>
        <CityDeparture data={oneFlight}/>
        <TimeDeparture data={oneFlight}/>
        <CityArrival data={oneFlight}/>
        <TimeArrival data={oneFlight}/>
        <TimeExpected data={oneFlight}/>
        <Status data={oneFlight.id}/>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allData: state.allDataReducer.data,
    visible: state.barControlReducer.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisible: (data) => {
      dispatch(barControlAction(data))
    }
  }
};

export const TableBody = connect(mapStateToProps, mapDispatchToProps)(Body);