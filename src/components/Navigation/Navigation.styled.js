import styled from 'styled-components';
import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';

export const MainNav = styled(Container)`
  display: flex;
  min-width: 30px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: solid 1px black;
`;

export const SiteNav = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: #1976d2;
  }
`;
