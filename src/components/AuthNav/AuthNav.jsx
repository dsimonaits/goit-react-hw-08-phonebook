import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModalWindow from 'components/Modal/Modal';
import {
  AuthNavStyled,
  NavLinkStyled,
  BurgerButton,
  ModalAuthContent,
} from './AuthNav.styled';

export const AuthNav = () => {
  const [showModal, setShowModal] = useState(false);

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
      <ModalAuthContent>
        <li>
          <NavLinkStyled to="register" on onClick={closeModal}>
            Register
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="login" onClick={closeModal}>
            Log In
          </NavLinkStyled>
        </li>
      </ModalAuthContent>
    );
  };

  return (
    <>
      <AuthNavStyled>
        <li>
          <NavLinkStyled to="register">Register</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="login">Log In</NavLinkStyled>
        </li>
      </AuthNavStyled>
      <BurgerButton onClick={openModal}>
        <GiHamburgerMenu size="1.5em" />
      </BurgerButton>
      {showModal && (
        <ModalWindow onClick={closeModal}>{AuthContent()}</ModalWindow>
      )}
    </>
  );
};
