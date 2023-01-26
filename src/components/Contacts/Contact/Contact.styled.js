import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #373434a6;
  gap: 5px;
  width: 120px;

  line-height: 1.3;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const B = styled.b`
  color: black;
`;

export const Form = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  /* justify-content: center; */

  color: #373434a6;
  background-color: white;

  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-flow: column;
`;

export const Input = styled.input`
  width: 120px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
