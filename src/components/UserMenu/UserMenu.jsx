import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from 'redux/auth/auth-operations';
import { selectEmail } from 'redux/auth/auth-selectors';
import ButtonMui from 'components/ButtonMui/ButtonMui';
import {
  AuthMenuStyled,
  BurgerButton,
  AuthContentStyled,
  User,
} from './UserMenu.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModalWindow from 'components/Modal/Modal';

export const AuthMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const userEmail = useSelector(selectEmail);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  const AuthContent = () => {
    return (
      <AuthContentStyled>
        <User>{`${userEmail}`}</User>
        <ButtonMui onClick={() => dispatch(logout())}>Logout</ButtonMui>
      </AuthContentStyled>
    );
  };

  return (
    <>
      <AuthMenuStyled>{AuthContent()}</AuthMenuStyled>
      <BurgerButton onClick={openModal}>
        <GiHamburgerMenu size="1.5em" />
      </BurgerButton>
      {showModal && (
        <ModalWindow onClick={closeModal}>{AuthContent()}</ModalWindow>
      )}
    </>
  );
};
