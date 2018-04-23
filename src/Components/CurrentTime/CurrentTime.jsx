import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTime} from '../../js/utils/formatTime';
import {setCurrentTimeAction} from '../../js/store/actions/setCurrentTimeAction';

import style from './index.css'

let minutesInterval;

class Time extends Component {

  setTime() {
    const date = setCurrentTimeAction(new Date);
    this.props.setCurrentTime(date);
  }

  setCurrentTime() {
    this.setTime();
    minutesInterval = setInterval(() => {
      this.setTime();
    }, 60000)
  }

  componentDidMount() {
    this.setCurrentTime();
  }

  componentWillUnmount() {
    clearInterval(minutesInterval);
  }

  render() {
    const currentTime = new Date(this.props.currentTime);
    const hour = formatTime(currentTime.getHours());
    const minutes = formatTime(currentTime.getMinutes());

    return <span className={'current-time'}>{` ${hour}:${minutes}`}</span>
  }
}

export const CurrentTime = connect(({timeReducer}) =>
    ({
      currentTime: timeReducer.data
    }),
  dispatch => ({
    setCurrentTime(time){
      dispatch({type: time.type, payload: time.data})
    }
  })
)(Time);