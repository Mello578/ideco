import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './index.css'
import {barControlAction} from '../../js/store/actions/barControlAction';
import {STATUS_FLIGHT} from '../../../constants/statusFlight';
import {getElem} from '../../js/utils/getElem';
import {updateData} from '../../js/utils/requestsOfData';
import {getTime} from '../../js/utils/getTime';
import {dateFormat} from '../../js/utils/dateFormat';

const {TABLE_HEADER} = require('../../../constants/constants');

let selectedFlight = null;
let flightStatus = null;

export function getSelectedFlight(getFlight) {
  selectedFlight = getFlight;
  flightStatus = getElem(`status-${getFlight.id}`).innerHTML;
}

class Bar extends Component {

  update() {
    let updateFlight = {...selectedFlight};

    if (updateFlight.airlines.name !== this.airlinesName.value
      || updateFlight.airlines.flight !== this.airlinesFlight.value
      || updateFlight.aircraft.typeJet !== this.typeJet.value
      || updateFlight.departureCity.city !== this.departureCity.value
      || updateFlight.arrivalCity.city !== this.arrivalCity.value
      || dateFormat(updateFlight.allDataTime.timeDepart) !== this.timeDepart.value
      || dateFormat(updateFlight.allDataTime.timeArrival) !== this.timeArrival.value
      || dateFormat(updateFlight.allDataTime.expectedTime) !== this.expectedTime.value
    ) {
      const newTimeDepart = getTime(this.timeDepart.value);
      const newTimeArrival = getTime(this.timeArrival.value);
      const newExpectedTime = getTime(this.expectedTime.value);

      updateFlight.airlines.name = this.airlinesName.value;
      updateFlight.airlines.flight = this.airlinesFlight.value;
      updateFlight.aircraft.typeJet = this.typeJet.value;
      updateFlight.departureCity.city = this.departureCity.value;
      updateFlight.arrivalCity.city = this.arrivalCity.value;
      updateFlight.allDataTime.timeDepart = newTimeDepart;
      updateFlight.allDataTime.timeArrival = newTimeArrival;
      updateFlight.allDataTime.expectedTime = newExpectedTime;
      updateData(updateFlight, this.props.filterData);
    }
  }

  canceled() {
    const {visible} = this.props;
    const newVisible = barControlAction(!visible);
    this.props.setVisible(newVisible);
  }

  componentWillUnmount() {
    selectedFlight = null;
    flightStatus = null;
  }

  render() {
    const {aircraft, airlines, arrivalCity, departureCity, allDataTime} = selectedFlight ? selectedFlight : '';
    const arrayHeader = TABLE_HEADER.split(',');
    const headerOne = arrayHeader.slice(0, 5);
    const headerTwo = arrayHeader.slice(5);
    const arrayStatus = Object.values(STATUS_FLIGHT);

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
                    <input ref={(input) => this.airlinesName = input}
                           className={'input-edited'} id='block-airline' defaultValue={airlines.name}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.airlinesFlight = input}
                           className={'input-edited'} id='block-flight' defaultValue={airlines.flight}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.typeJet = input} className={'input-edited'}
                           id='block-typeJet' defaultValue={aircraft.typeJet}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.departureCity = input}
                           className={'input-edited'} id='block-departureCity'
                           defaultValue={departureCity.city}></input>
                  </div>
                </td>
                <td>
                  <input ref={(input) => this.timeDepart = input} type='datetime-local'
                         defaultValue={dateFormat(allDataTime.timeDepart)}/>
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
                    <input ref={(input) => this.arrivalCity = input}
                           className={'input-edited'} name='arrivalCity' id='block-arrivalCity'
                           defaultValue={arrivalCity.city}></input>
                  </div>
                </td>
                <td>
                  <input ref={(input) => this.timeArrival = input} type='datetime-local'
                         defaultValue={dateFormat(allDataTime.timeArrival)}/>
                </td>
                <td>
                  <input ref={(input) => this.expectedTime = input} type='datetime-local'
                         defaultValue={dateFormat(allDataTime.expectedTime)}/>
                </td>
                <td>
                  <select ref={(select) => this.status = select} defaultValue={flightStatus}
                          className={'select'} name='status' id='block-status'>
                    {
                      arrayStatus.map((item, key) => {
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
            <button onClick={() => this.update()}>Сохранить</button>
            <button onClick={() => this.canceled()}>Отменить</button>
          </div>
        </div>
      </div>
    )
  }
}

export const BarControl = connect(({barControlReducer, filterDataReducer}) =>
    ({
      visible: barControlReducer.data,
      filterData: filterDataReducer
    }),
  dispatch => ({
    setVisible(mode) {
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(Bar);