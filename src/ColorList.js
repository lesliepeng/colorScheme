import React, { Component } from 'react';
import ColorBox from './ColorBox';

class ColorList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            <ColorBox className="color-box" color={item.baseHEX}>
              {item.baseHEX}
            </ColorBox>
          </li>
        ))}
      </ul>
    );
  }
}

export default ColorList;
