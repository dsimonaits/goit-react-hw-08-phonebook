import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style: none;
  /* max-height: 400px;
  overflow-y: auto; */

  @media screen and (min-width: 768px) {
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  min-height: 150px;
  padding: 5px;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: Black;
  /* background-color: black; */

  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
    }
  }
`;
