import styled from 'styled-components';
import Container from 'components/Container/Container';
import { NavLink, Link } from 'react-router-dom';

export const MainNav = styled(Container)`
  display: flex;
  min-width: 30px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: solid 1px black;
`;

export const Logo = styled(Link)`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

export const SiteNav = styled.ul`
  display: flex;
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
