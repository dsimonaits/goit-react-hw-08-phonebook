import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from 'redux/auth/auth-operations';
import { selectUser } from 'redux/auth/auth-selectors';
import { AuthMenuStyled, BurgerButton } from './AuthMenu.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
export const AuthMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <AuthMenuStyled>
        <p>{`Welcome, ${user}!`}</p>
        <button onClick={() => dispatch(logout())}>LogOut</button>
      </AuthMenuStyled>
      <BurgerButton onClick={() => setShowModal(true)}>
        <GiHamburgerMenu size="1.5em" />
      </BurgerButton>
    </>
  );
};
