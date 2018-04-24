import React, {Component} from 'react';
import style from './index.css';
import {PanelControl} from '../PanelControl/PanelControl';
import {TableFlight} from '../TableFlight/TableFlight';
import {connect} from 'react-redux';
import {CurrentTime} from '../CurrentTime/CurrentTime';
import {BarControl} from '../BarControl/BarControl';

class App extends Component {

  render() {
    return (
      <div>
        {
          this.props.visible ? <BarControl /> : ''
        }
        <div className={'container'}>
          <div className={'container--header'}>
            <h1>Онлайн табло</h1>
            <span>Текущее время:
            <CurrentTime/>
          </span>
          </div>
          <PanelControl/>
          <TableFlight/>
        </div>
      </div>

    )
  }
}

export const Application = connect(({allDataReducer, timeReducer, barControlReducer}) =>
    ({
      allData: allDataReducer.data,
      currentTime: timeReducer.data,
      visible: barControlReducer.data,
    }),
  dispatch => ({
  setCurrentTime(time){
    dispatch({type: time.type, payload: time.data})
    }
  })
)(App);