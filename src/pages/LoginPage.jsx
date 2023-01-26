// import { LoginForm } from 'components/LoginForm/LoginForm';
import SignIn from 'components/LoginFormMui/LoginFormMui';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export const LoginPage = () => {
  return (
    <Section>
      <Container>
        <SignIn />
      </Container>
    </Section>
  );
};
