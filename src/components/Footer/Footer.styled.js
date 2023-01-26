import styled from 'styled-components';
import Container from 'components/Container/Container';

export const FooterStyled = styled.footer`
  /* position: absolute; */
  bottom: 20px;
  width: auto;
  height: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  gap: 5px;

  border-top: 1px solid black;
`;

export const Link = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover {
    color: var(--secondary-color);
  }
`;
