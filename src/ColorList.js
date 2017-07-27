import React, { Component } from 'react';
import ColorBox from './ColorBox';
import colorPalette from './utils/util'

class ColorList extends React.Component {
  render() {
    var colorArray = [1,2,3,4,5,6,7,8,9,10]
    return (
      <ul>
        {this.props.items.map(item => (
          colorArray.map(index =>
            <li key={item.id + index}>
              <ColorBox className="color-box" color={colorPalette(item.baseHEX,index)}>
                <span>{colorPalette(item.baseHEX,index)}</span> <span>,{index}</span>
              </ColorBox>
            </li>
          )
        ))}
      </ul>
    );
  }
}

export default ColorList;
