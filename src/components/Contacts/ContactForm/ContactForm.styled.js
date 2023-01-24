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
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-flow: column;
`;

export const Input = styled.input`
  width: 120px;
`;
