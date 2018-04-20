import React, {Component} from 'react';
import style from './index.css';
import {PanelControl} from '../PanelControl/PanelControl';

export class Application extends Component {

  render() {
    return (
      <div className={'container'}>
        <h1>Онлайн табло</h1>
        <PanelControl/>
      </div>
    )
  }
}
