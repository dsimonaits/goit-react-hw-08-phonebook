import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  color: #373434a6;
  margin: auto;
  min-width: 260px;
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

  color: #373434a6;
  background-color: white;

  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  } ;
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
  padding-top: 10px;
  display: flex;
  margin: auto;
  gap: 10px;
`;

export const DataWrapper = styled.div`
  min-width: 180px;
  display: flex;
  justify-content: space-between;
`;
