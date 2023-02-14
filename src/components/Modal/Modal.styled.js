import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 101;
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: #00000023;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  -webkit-animation: 400ms ease 0s normal forwards 1 fadein;
  animation: 400ms ease 0s normal forwards 1 fadein;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Modal = styled.div`
  z-index: 102;
  top: 25%;
  min-width: 150px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  position: absolute;
  padding: 10px;
  background-color: #ffffff;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const BtnClose = styled.button`
  padding: 5px;
  z-index: 99;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
`;
