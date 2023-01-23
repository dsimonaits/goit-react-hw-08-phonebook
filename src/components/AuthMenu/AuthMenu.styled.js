import styled from 'styled-components';

export const AuthMenuStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
