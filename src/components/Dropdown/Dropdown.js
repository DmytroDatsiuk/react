import React, { Component } from 'react';
import { DropBox, DropButton, DropShow } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <DropBox>
        <DropButton onClick={this.toggle}>
          {visible ? 'Сховати' : 'Показати'}
        </DropButton>
        {visible && <DropShow>Випадаюче меню</DropShow>}
      </DropBox>
    );
  }
}
