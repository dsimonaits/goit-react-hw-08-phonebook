import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  justify-content: center;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  width: 280px;
  gap: 10px;
  align-items: flex-end;
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
