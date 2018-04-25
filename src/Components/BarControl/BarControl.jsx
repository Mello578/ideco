import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './index.css'
import {barControlAction} from '../../js/store/actions/barControlAction';
import {formatTime} from '../../js/utils/formatTime';
import {STATUS_FLIGHT} from '../../../constants/statusFlight';

const {TABLE_HEADER} = require('../../../constants/constants');
const allAircraft = require('../../../constants/dataCityesAndAircrafts/aircrafts');
const allAirlines = require('../../../constants/dataCityesAndAircrafts/airlines');
const dataCity = require('../../../constants/dataCityesAndAircrafts/cityes');

let selectedFlight = null;

export function getSelectedFlight(getFlight) {
  selectedFlight = getFlight;
}

class Bar extends Component {

  dateFormat(time){
    time = new Date(time);
    const year = time.getFullYear();
    const month = formatTime(time.getMonth());
    const day = formatTime(time.getDay());
    const hour = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    console.log(`${year}-${month}-${day}T${hour}:${minutes}`)
    return `${year}-${month}-${day}T${hour}:${minutes}`;
  }

  canceled() {
    const {visible} = this.props;
    const newVisible = barControlAction(!visible);
    this.props.setVisible(newVisible);
  }

  componentWillUnmount() {
    selectedFlight = null;
  }

  render() {
    const {aircraft, airlines, arrivalCity, departureCity, allDataTime} = selectedFlight ? selectedFlight : '';
    const arrayHeader = TABLE_HEADER.split(',');
    const headerOne = arrayHeader.slice(0, 5);
    const headerTwo = arrayHeader.slice(5);
    const arrayStatus = Object.values(STATUS_FLIGHT);
    const allCity = [...dataCity.allCities, dataCity.DC];

    return (
      <div className={'bar-control'}>
        <div className={'bar-control--dark-background'}></div>
        <div className={'modal-window'}>
          <span>Редактирование полетов</span>
          <div className={'block-edited'}>
            <table>
              <thead>
              <tr>
                {
                  headerOne.map((item, key) => {
                    return (
                      <th key={key}>
                        {item}
                      </th>
                    )
                  })
                }
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div>
                    <input className={'input-edited'} name='airlines' id='block-airline' defaultValue={airlines.name}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input className={'input-edited'} name='flight' id='block-flight' defaultValue={airlines.flight}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input className={'input-edited'} name='aircraft' id='block-typeJet' defaultValue={aircraft.typeJet}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input className={'input-edited'} name='departureCity' id='block-departureCity' defaultValue={departureCity.city}></input>
                  </div>
                </td>
                <td>
                  <input type='datetime-local' defaultValue={this.dateFormat(allDataTime.timeDepart)}/>
                </td>
              </tr>
              </tbody>
            </table>
            <table>
              <thead>
              <tr>
                {
                  headerTwo.map((item, key) => {
                    return (
                      <th key={key}>
                        {item}
                      </th>
                    )
                  })
                }
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div>
                    <input className={'input-edited'} name='arrivalCity' id='block-arrivalCity' defaultValue={arrivalCity.city}></input>
                  </div>
                </td>
                <td>
                  <input type='datetime-local' defaultValue={this.dateFormat(allDataTime.timeArrival)}/>
                </td>
                <td>
                  <input type='datetime-local' defaultValue={this.dateFormat(allDataTime.expectedTime)}/>
                </td>
                <td>
                  <select className={'select'} name='status' id='block-status'>
                    {
                      arrayStatus.map((item, key)=>{
                        return (
                          <option key={key} value={item}>
                            {item}
                          </option>
                        )
                      })
                    }
                  </select>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className={'block-button'}>
            <button>Сохранить</button>
            <button onClick={() => this.canceled()}>Отменить</button>
          </div>
        </div>
      </div>
    )
  }
}

export const BarControl = connect(({barControlReducer}) =>
    ({
      visible: barControlReducer.data,
    }),
  dispatch => ({
    setVisible(mode) {
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(Bar);