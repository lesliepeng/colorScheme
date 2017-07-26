import React, { Component } from 'react';

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
