import styled from 'styled-components';

export const AuthMenuStyled = styled.div`
  display: none;
  /* display: flex;
  gap: 10px; */

  @media screen and (min-width: 767.9px) {
    display: flex;
    gap: 10px;
  }
`;

export const BurgerButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 767.9px) {
    display: none;
  }
`;
