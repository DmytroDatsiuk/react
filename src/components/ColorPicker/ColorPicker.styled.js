import styled from 'styled-components';

export const Picker = styled.div`
  margin-bottom: 20px;
`;

export const PickerTitle = styled.h2`
  background-image: linear-gradient(
    to right,
    #ffffff,
    #ffffff,
    #ffffff,
    #f44336,
    #4caf50,
    #2196f3,
    #607d8b,
    #e91e63,
    #3f51b5,
    #ffffff,
    #ffffff,
    #ffffff
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PickerLabel = styled.span`
  transition: color 500ms linear;
`;

export const ColorBox = styled.div`
  /* background-color: teal; */
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: teal;
  border: none;
  cursor: pointer;

  transition: transform 250ms linear;

  &.active {
    transform: scale(1.2);
  }
`;
