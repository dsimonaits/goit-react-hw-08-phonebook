import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { MainNav, SiteNav, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <MainNav>
      <a href="/">
        <b>PhoneBook</b>
      </a>
      <nav>
        <SiteNav>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          {token && (
            <li>
              <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
            </li>
          )}
        </SiteNav>
      </nav>
      {token ? <AuthMenu /> : <AuthNav />}
    </MainNav>
  );
};
