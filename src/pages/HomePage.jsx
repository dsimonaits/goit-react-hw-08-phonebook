import { useNavigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectToken,
  selectUser,
  selectUserRefreshCompleted,
} from 'redux/auth/auth-selectors';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { selectContacts } from 'redux/contacts/selectors';
export const HomePage = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const refreshCompleted = useSelector(selectUserRefreshCompleted);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleClickNavigate = e => {
    console.log(e.target.name);

    switch (e.target.name) {
      case 'register':
        navigate('/register');
        break;
      case 'login':
        navigate('/login');
        break;

      default:
        break;
    }
  };
  return token && refreshCompleted ? (
    <Section>
      <Container className="hero">
        <h1>'Welcome, {user}'</h1>
        <p>
          Current contacts count is: <b>{contacts.length}</b>
        </p>
      </Container>
    </Section>
  ) : (
    <Section>
      <Container className="hero">
        <h1>Welcome to 'My PhoneBook App'</h1>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {
            <Grid item>
              <p>
                Please{' '}
                <Link
                  component="button"
                  onClick={handleClickNavigate}
                  variant="body2"
                  name="register"
                >
                  {'Register'}
                </Link>{' '}
                or{' '}
                <Link
                  component="button"
                  onClick={handleClickNavigate}
                  variant="body2"
                  name="login"
                >
                  {'Log In'}
                </Link>
              </p>
            </Grid>
          }
        </Grid>
      </Container>
    </Section>
  );
};
