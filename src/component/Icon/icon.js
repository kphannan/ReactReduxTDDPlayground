
import React, { Component } from 'react';
import 'uxicon/uxicon.css';

export default class Icon extends Component {

  render() {
    return (
      <span style={ this.props.styles } className={`icon_${ this.props.name } ${ this.props.color }-text`}></span>
    );
  }
}

