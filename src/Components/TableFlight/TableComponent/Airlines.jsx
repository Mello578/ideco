import React, {Component} from 'react';

export class Airlines extends Component {

  render() {
    const {airlines} = this.props.data;
    return (
      <td>
        {airlines.flight}
      </td>
    )
  }
}
