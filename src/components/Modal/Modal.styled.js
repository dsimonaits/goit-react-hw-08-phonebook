import styled from 'styled-components';

export const Backdrop = styled.div`
  position: relative;
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: #00000023;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  top: 40px;
  min-width: 150px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  position: absolute;
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
