import { Link } from 'react-router-dom';
import { AuthNavstyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavstyled>
      <li>
        <Link to="register">Register</Link>
      </li>
      <li>
        <Link to="login">LogIn</Link>
      </li>
    </AuthNavstyled>
  );
};
