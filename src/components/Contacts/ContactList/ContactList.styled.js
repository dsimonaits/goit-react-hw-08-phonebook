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
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  @media screen and (min-width: 1200px) {
    max-height: 500px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  padding: 5px;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: Black;
  /* background-color: black; */

  &:not(:last-child) {
    @media screen and (max-width: 768px) {
      margin-bottom: 5px;
    }
  }
`;
