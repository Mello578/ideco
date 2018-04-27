import React, {Component} from 'react';
import style from './index.css';
import {filerData} from '../../js/utils/requestsOfData';

export class PanelControl extends Component {

  filter() {
    const cities = {
      cityDepart: this.cityDepart.value,
      cityArrival: this.cityArrival.value,
    };
    filerData(cities);
  }

  select() {
    let addVariable;

    const cityDepart = this.cityDepart.value;
    const cityArrival = this.cityArrival.value;

    if (cityArrival.length || cityDepart.length) {
      addVariable = cityArrival;
      this.cityArrival.value = cityDepart;
      this.cityDepart.value = addVariable;
      this.filter();
    }
  }

  render() {
    return (
      <div className={'panel-control'}>
        <input ref={(input) => this.cityDepart = input} onChange={()=>this.filter()} className={'city-input'} type='text'/>
        <button className={'button panel-control--button-revers'} onClick={() => this.select()}></button>
        <input ref={(input) => this.cityArrival = input} onChange={()=>this.filter()} className={'city-input'} type='text'/>
        <button className={'button panel-control--button-filter'}>Фильтр</button>

      </div>
    )
  }
}
