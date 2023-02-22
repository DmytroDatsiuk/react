import React from 'react';
import { ButtonsDecInc } from './Counter.styled';

export const Controls = ({ onIncrement, onDecrement }) => (
  <ButtonsDecInc>
    <button type="button" onClick={onIncrement}>
      Increment by 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by 1
    </button>
  </ButtonsDecInc>
);
