import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex; */
  margin-bottom: 20px;
  padding: 5px;
`;

export const Item = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  padding-top: 4px;
  padding-bottom: 4px;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;
