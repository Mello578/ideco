import React, {Component} from 'react';
import {connect} from 'react-redux';

class Logo extends Component {

  render() {
    const {airlines} = this.props.allData[this.props.idLogo];
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

export const LogoAirlines = connect(({allDataReducer}) =>
  ({
    allData: allDataReducer.data
  })
)(Logo);