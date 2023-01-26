import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import {
  selectToken,
  selectUser,
  selectUserRefreshCompleted,
} from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
export const HomePage = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const refreshCompleted = useSelector(selectUserRefreshCompleted);

  const avatar = `https://robohash.org/${user}.png?set=set5`;

  return token && refreshCompleted ? (
    <Section>
      <Container className="hero">
        <h1>'Welcome, {user}'</h1>
        <img alt="robot" src={avatar} width="100px"></img>
      </Container>
    </Section>
  ) : (
    <Section>
      <Container className="hero">
        <h1>
          Welcome to <br /> 'My PhoneBook App'
        </h1>
      </Container>
    </Section>
  );
};
