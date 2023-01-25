import styled from 'styled-components';

export const AuthMenuStyled = styled.div`
  display: none;

  @media screen and (min-width: 767.9px) {
    display: flex;
    gap: 20px;
  }
`;

export const AuthContentStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BurgerButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 767.9px) {
    display: none;
  }
`;
