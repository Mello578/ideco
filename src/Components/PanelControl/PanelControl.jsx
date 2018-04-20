import React, {Component} from 'react';
import style from './index.css';

export class PanelControl extends Component {

  render() {
    return (
      <div className={'panel-control'}>
        <input className={'city-input'} type='text'/>
        <button className={'button panel-control--button-revers'}></button>
        <input className={'city-input'} type='text'/>
        <button className={'button panel-control--button-filter'}>Фильтр</button>

      </div>
    )
  }
}
