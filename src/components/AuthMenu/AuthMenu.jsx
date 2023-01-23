import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from 'redux/auth/auth-operations';
import { selectUser } from 'redux/auth/auth-selectors';
import { AuthMenuStyled, BurgerButton } from './AuthMenu.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModalWindow from 'components/Modal/Modal';
export const AuthMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const AuthContent = () => {
    return (
      <>
        <p>{`Welcome, ${user}!`}</p>
        <button onClick={() => dispatch(logout())}>LogOut</button>
      </>
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
