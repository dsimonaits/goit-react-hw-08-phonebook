import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavstyled = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: red;
  }
`;
