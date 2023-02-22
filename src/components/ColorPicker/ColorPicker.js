import React, { Component } from 'react';
import {
  ColorBox,
  ColorButton,
  Picker,
  PickerLabel,
  PickerTitle,
} from './ColorPicker.styled';

export class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx(index) {
    this.setState({
      activeOptionsIdx: index,
    });
  }

  makeOptionClassName(index) {
    return index === this.state.activeOptionsIdx ? 'active' : '';
  }

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeOptionsIdx];
    return (
      <Picker>
        <PickerTitle style={{ color: color }}>Color Picker</PickerTitle>
        <p>
          Choose color:{' '}
          <PickerLabel style={{ color: color }}>{label}</PickerLabel>
        </p>
        <ColorBox>
          {options.map(({ label, color }, idx) => (
            <ColorButton
              key={label}
              style={{
                backgroundColor: color,
              }}
              className={this.makeOptionClassName(idx)}
              onClick={() => this.setActiveIdx(idx)}
            ></ColorButton>
          ))}
        </ColorBox>
      </Picker>
    );
  }
}
