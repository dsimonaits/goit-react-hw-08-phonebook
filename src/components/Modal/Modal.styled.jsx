import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00000023;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 80vw;
  height: auto;
  position: relative;
  padding: 10px;
  background-color: #ffffff;
`;

export const BtnClose = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
`;
