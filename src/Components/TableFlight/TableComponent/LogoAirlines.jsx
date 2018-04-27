import React, {Component} from 'react';
import {connect} from 'react-redux';

export class LogoAirlines extends Component {

   render() {
    const {airlines} = this.props.data;
    return(
    <td>
      <img src={airlines.logo}
           alt={airlines.name}
           title={airlines.name}
           className={'table-flight--logo-airlines'}/>
    </td>
    )
  }
}
