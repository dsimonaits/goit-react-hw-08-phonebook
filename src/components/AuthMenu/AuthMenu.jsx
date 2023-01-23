import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectUser } from 'redux/auth/auth-selectors';
import { AuthMenuStyled } from './AuthMenu.styled';

export const AuthMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <AuthMenuStyled>
      <p>{`Welcome, ${user}!`}</p>
      <button onClick={() => dispatch(logout())}>LogOut</button>
    </AuthMenuStyled>
  );
};
