import styled from 'styled-components';

export const AuthMenuStyled = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
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
