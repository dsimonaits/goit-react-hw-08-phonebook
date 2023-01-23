import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  color: #373434a6;
  background-color: white;

  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-flow: column;
`;

export const Input = styled.input`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;
