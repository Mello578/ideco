import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './index.css';
import {filterData} from '../../js/utils/requestsOfData';
import {filterDataAction} from '../../js/store/actions/filterAction';
import {barControlAction} from '../../js/store/actions/barControlAction';
import {pagination} from '../../js/utils/pagination';
import {setNumbRowsAction} from '../../js/store/actions/numbRowsAction';

class Panel extends Component {

  filter() {
    const cities = {
      cityDepart: this.cityDepart.value,
      cityArrival: this.cityArrival.value,
    };
    this.props.filterCity(cities);
    filterData(cities);
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

  create() {
    this.props.setVisible(!this.props.visible);
  }

  setNumbRows(){
    const select = this.selectNumbRows.value;
    this.props.numbRows(select);
  }

  render() {
    return (
      <div className={'panel-control'}>
        <input ref={(input) => this.cityDepart = input} onChange={() => this.filter()} className={'city-input'}
               type='text'/>
        <button className={'button panel-control--button-revers'} onClick={() => this.select()}></button>
        <input ref={(input) => this.cityArrival = input} onChange={() => this.filter()} className={'city-input'}
               type='text'/>
        <button className={'button panel-control--button-create'} onClick={() => this.create()}>Создать рейс</button>
        <div className={'panel-control--numb-rows'}>
          <span>Количество рейсов: </span>
          <select ref={(select) => this.selectNumbRows = select} onChange={()=>this.setNumbRows()} name='numbRows' id={'numbRows'} className={'select-numb-rows'} defaultValue={this.props.numbRows}>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.barControlReducer.data,
    numberRows: state.numbRowsReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCity: (data) => {
      dispatch(filterDataAction(data))
    },
    setVisible: (data) => {
      dispatch(barControlAction(data))
    },
    numbRows: (data) => {
      dispatch(setNumbRowsAction(data))
    }
  }
};

export const PanelControl = connect(mapStateToProps, mapDispatchToProps)(Panel);