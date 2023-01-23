import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style: none;
  max-height: 400px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 500px;
  }

  @media screen and (min-width: 1200px) {
    max-height: 500px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  padding: 5px;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: Black;
  /* background-color: black; */

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
