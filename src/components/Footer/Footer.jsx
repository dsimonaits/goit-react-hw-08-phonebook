import { FooterStyled, FooterContainer, Link } from './Footer.styled';
import { FaGithubSquare } from 'react-icons/fa';

function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <p>Created by</p>
        <Link href="https://github.com/dsimonaits" target="_blank">
          <b>Deniss Simonaits</b> <FaGithubSquare size="35px" color="#1976d2" />
        </Link>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
