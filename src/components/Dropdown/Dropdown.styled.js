import styled from 'styled-components';

export const DropBox = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
`;

export const DropButton = styled.button`
  padding: 10px;
  margin-bottom: 5px;
`;

export const DropShow = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: teal;
  padding-top: 10px;
  padding-bottom: 10px;
`;
