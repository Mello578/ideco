import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {barControlAction} from '../../js/store/actions/barControlAction';
import {STATUS_FLIGHT_BLOCKED} from '../../../constants/statusFlight';
import {getElem} from '../../js/utils/getElem';
import {createFlight, deleteFlight, updateData} from '../../js/utils/requestsOfData';
import {getTime} from '../../js/utils/getTime';
import {dateFormat} from '../../js/utils/dateFormat';

const {TABLE_HEADER} = require('../../../constants/constants');
const allAirlines = require('../../../constants/dataCityesAndAircrafts/airlines');

let selectedFlight = null;
let flightStatus = null;

export function getSelectedFlight(getFlight) {
  selectedFlight = getFlight;
  flightStatus = getElem(`status-${getFlight.id}`).innerHTML;
}

class Panel extends Component {

  update() {
    let updateFlight = {
      airlines: {},
      aircraft: {},
      departureCity: {},
      arrivalCity: {},
      allDataTime: {},
    };
    if (selectedFlight) {
      updateFlight = {...selectedFlight};
      if (updateFlight.airlines.name === this.airlinesName.value
        && updateFlight.airlines.flight === this.airlinesFlight.value
        && updateFlight.aircraft.typeJet === this.typeJet.value
        && updateFlight.departureCity.city === this.departureCity.value
        && updateFlight.arrivalCity.city === this.arrivalCity.value
        && dateFormat(updateFlight.allDataTime.timeDepart) === this.timeDepart.value
        && dateFormat(updateFlight.allDataTime.timeArrival) === this.timeArrival.value
        && dateFormat(updateFlight.allDataTime.expectedTime) === this.expectedTime.value
        && this.status.value !== STATUS_FLIGHT_BLOCKED.cancelled
      ) {
        return
      }
    }
    if (this.timeDepart.value
      && this.timeArrival.value
      && this.expectedTime.value
      && this.airlinesName.value
      && this.airlinesFlight.value
      && this.typeJet.value
      && this.departureCity.value
      && this.arrivalCity.value
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
      this.status.value === STATUS_FLIGHT_BLOCKED.cancelled
        ? updateFlight.status = STATUS_FLIGHT_BLOCKED.cancelled
        : '';
      selectedFlight
        ? updateData(updateFlight, this.props.filterData)
        : createFlight(updateFlight, this.props.filterData);
    } else {
      alert('Заполните все поля')
    }

  }

  canceled() {
    const newVisible = barControlAction(!this.props.visible);
    this.props.setVisible(newVisible);
  }

  deleted() {
    deleteFlight(selectedFlight.id);
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
    const arrayStatus = Object.values(STATUS_FLIGHT_BLOCKED);
    const arrayAirlanes = allAirlines.map((item) => item.name);
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
                    <select ref={(select) => this.airlinesName = select} defaultValue={airlines ? airlines.name : ''}
                            className={'select'} name='status' id='block-status'>
                      {
                        arrayAirlanes.map((item, key) => {
                          return (
                            <option key={key} value={item}>
                              {item}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.airlinesFlight = input}
                           className={'input-edited'} id='block-flight'
                           defaultValue={airlines ? airlines.flight : ''}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.typeJet = input} className={'input-edited'}
                           id='block-typeJet' defaultValue={aircraft ? aircraft.typeJet : ''}></input>
                  </div>
                </td>
                <td>
                  <div>
                    <input ref={(input) => this.departureCity = input}
                           className={'input-edited'} id='block-departureCity'
                           defaultValue={departureCity ? departureCity.city : ''}></input>
                  </div>
                </td>
                <td>
                  <input ref={(input) => this.timeDepart = input} type='datetime-local'
                         defaultValue={allDataTime ? dateFormat(allDataTime.timeDepart) : ''}/>
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
                           defaultValue={arrivalCity ? arrivalCity.city : ''}></input>
                  </div>
                </td>
                <td>
                  <input ref={(input) => this.timeArrival = input} type='datetime-local'
                         defaultValue={allDataTime ? dateFormat(allDataTime.timeArrival) : ''}/>
                </td>
                <td>
                  <input ref={(input) => this.expectedTime = input} type='datetime-local'
                         defaultValue={allDataTime ? dateFormat(allDataTime.expectedTime) : ''}/>
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
            <button className={'edit-panel--button'} onClick={() => this.update()}>Сохранить</button>
            <button className={'edit-panel--button'} onClick={() => this.canceled()}>Отменить</button>
            <button className={'edit-panel--button'} style={{display: selectedFlight ? 'block' : 'none'}}
                    onClick={() => this.deleted()}>Удалить
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export const EditPanel = connect(({barControlReducer, filterDataReducer}) =>
    ({
      visible: barControlReducer.data,
      filterData: filterDataReducer
    }),
  dispatch => ({
    setVisible(mode) {
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(Panel);