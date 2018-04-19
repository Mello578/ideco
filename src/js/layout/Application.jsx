import React, {Component} from 'react';
import {test, testClick} from '../utils';

export class Application extends Component {

  op() {
    testClick();
  }

  componentDidMount() {
    test();
  }

  render() {
    return (
      <span id='test' onClick={() => this.op()}></span>
    )
  }
}
