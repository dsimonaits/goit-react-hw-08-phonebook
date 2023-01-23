import { AuthNavstyled, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavstyled>
      <li>
        <NavLinkStyled to="register">Register</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="login">LogIn</NavLinkStyled>
      </li>
    </AuthNavstyled>
  );
};
