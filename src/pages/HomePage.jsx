import { Link } from 'react-router-dom';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
export const HomePage = () => {
  return (
    <Section>
      <Container className="hero">
        <h1>Welcome to 'My PhoneBook App'</h1>
        <p>
          Please {<Link to="register"> Register</Link>} or{' '}
          {<Link to="login">LogIn</Link>}
        </p>
      </Container>
    </Section>
  );
};
