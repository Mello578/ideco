import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {getSelectedFlight} from '../BarControl/BarControl';
import {oneFlightSelectorFactory} from '../../js/selectors/oneFlightSelectorFactory'

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

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {backgroundSort, flight, oneFlight} = this.props;
    console.log('body')
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
        <Status flightStatus={oneFlight.id}/>
      </tr>
    )
  }
}

const mapStateToProps = (state, {oneFlight}) => {
  const oneFlightSelector = oneFlightSelectorFactory(oneFlight);
  return {
    allData: state.allDataReducer.data,
    visible: state.barControlReducer.data,
    flight: oneFlightSelector(state)
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