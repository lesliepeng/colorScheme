import React, { Component } from 'react';
import colorPalette from './utils/util';

class ColorBox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        {this.props.children}
      </div>
    );
  }
}

export default ColorBox;
