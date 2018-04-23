import React, {Component} from 'react';
import style from './index.css';
import {PanelControl} from '../PanelControl/PanelControl';
import {TableFlight} from '../TableFlight/TableFlight';
import {getElem} from '../../js/utils/getElem';
import {formatTime} from '../../js/utils/formatTime';

export class Application extends Component {

  setTime(element){
    let separator = ':';
    let date = new Date;
    element.innerHTML = formatTime(date.getHours()) + separator + formatTime(date.getMinutes());
  }

  setCurrentTime(){
    const timeElement = getElem('current-time');
    this.setTime(timeElement);
    setInterval(()=>{
      this.setTime(timeElement);
    }, 60000)
  }

  componentDidMount(){
    this.setCurrentTime();
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'container--header'}>
          <h1>Онлайн табло</h1>
          <span>Текущее время: <span id={'current-time'}></span></span>
        </div>
        <PanelControl/>
        <TableFlight/>
      </div>
    )
  }
}
