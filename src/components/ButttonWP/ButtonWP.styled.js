import styled from 'styled-components';
export const BtnWP = styled.button`
  cursor: pointer;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  color: #373434a6;
  background-color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
    background-color: #373434a6;
    border: 1px solid inherit;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),
      color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:disabled {
    color: red;
  }
`;
