import React, {Component} from 'react';
import {test, testClick} from '../../js/utils/index';
import style from './index.css';
import {PanelControl} from '../PanelControl/PanelControl';

export class Application extends Component {

  op() {
    testClick();
  }

  componentDidMount() {
    test();
  }

  render() {
    return (
      <div className={'container'}>
        <h1>Онлайн табло</h1>
        <PanelControl/>
        <span id='test' onClick={() => this.op()}></span>
      </div>
    )
  }
}
