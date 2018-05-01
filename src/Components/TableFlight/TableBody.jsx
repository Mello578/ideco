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

    const {backgroundSort, oneFlight} = this.props;
    const {id} = oneFlight;
    return (
      <tr style={{background: backgroundSort % 2 === 0 ? '' : '#e3e3e3'}}
          onClick={() => this.visibleBarControl(oneFlight, Status)}>
        <LogoAirlines data={id}/>
        <Airlines data={id}/>
        <TypeJet data={id}/>
        <CityDeparture data={id}/>
        <TimeDeparture data={id}/>
        <CityArrival data={id}/>
        <TimeArrival data={id}/>
        <TimeExpected data={id}/>
        <Status data={id}/>
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