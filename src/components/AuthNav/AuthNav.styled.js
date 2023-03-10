import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled.ul`
  display: none;

  @media screen and (min-width: 767.9px) {
    display: flex;

    gap: 10px;
  }
`;

export const ModalAuthContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  &:hover,
  &:focus {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--secondary-color);
  }
  &.active {
    color: var(--secondary-color);
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
