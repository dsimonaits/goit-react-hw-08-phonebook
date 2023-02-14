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

  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.36);
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-flow: column;
`;

export const Input = styled.input`
  width: 120px;
`;
