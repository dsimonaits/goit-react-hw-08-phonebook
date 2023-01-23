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
