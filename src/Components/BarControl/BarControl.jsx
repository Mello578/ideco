import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './index.css'
import {barControlAction} from '../../js/store/actions/barControlAction';

const {TABLE_HEADER} = require('../../../constants/constants');

let selectedFlight = null;

export function getSelectedFlight(getFlight) {
  selectedFlight = getFlight;
}

class Bar extends Component {

  canceled() {
    const {visible} = this.props;
    const newVisible = barControlAction(!visible);
    this.props.setVisible(newVisible);
  }

  componentWillUnmount() {
    selectedFlight = null;
  }

  render() {
    console.log('idddd  ', selectedFlight);
    const {aircraft, airlines, arrivalCity, departureCity} = selectedFlight ? selectedFlight : '';
    const elementsFlight = TABLE_HEADER.split(',');
    return (
      <div className={'bar-control'}>
        <div className={'bar-control--dark-background'}></div>
        <div className={'modal-window'}>
          <span>Редактирование полетов</span>
          <div className={'block-aircraft'}>
            <table>
              <thead>
              <tr>
                {
                  elementsFlight.map((item, key) => {
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
                  <select name='airlines' id='block-airline'>
                    <option value={airlines.id}>{airlines.name}</option>
                  </select>
                </td>
                <td>
                  <select name='flight' id='block-flight'>
                    <option value={airlines.flight}>{airlines.flight}</option>
                  </select>
                </td>
                <td>
                  <select name='aircraft' id='block-aircraft'>
                    <option value={aircraft.id}>{aircraft.typeJet}</option>
                  </select>
                </td>
                <td>
                  <select name='departureCity' id='block-departureCity'>
                    <option value={departureCity.id}>{departureCity.city}</option>
                  </select>
                </td>
                <td></td>
                <td>
                  <select name='arrivalCity' id='block-arrivalCity'>
                    <option value={arrivalCity.id}>{arrivalCity.city}</option>
                  </select>
                </td>
                <td></td>
                <td></td>
                <td>
                  <select name='status' id='block-status'>
                    <option value={status}>{arrivalCity.city}</option>
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