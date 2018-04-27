import React, {Component} from 'react';
import {connect} from 'react-redux';
import {oneItemSelectorFactory} from '../../../js/selectors/oneItemSelectorFactory';

class Logo extends Component {

   render() {
    return(
    <td>
      <img src={this.props.pathSrc}
           alt={this.props.pathName}
           title={this.props.pathName}
           className={'table-flight--logo-airlines'}/>
    </td>
    )
  }
}

const mapStateToProps = (state, {data}) => {
  const pathSrc = ['airlines', 'logo'];
  const pathName = ['airlines', 'name'];
  const logoSrcSelector = oneItemSelectorFactory(data, pathSrc);
  const logoNameSelector = oneItemSelectorFactory(data, pathName);
  return {
    pathSrc: logoSrcSelector(state),
    pathName: logoNameSelector(state),
  }
};

export const LogoAirlines = connect(mapStateToProps)(Logo);