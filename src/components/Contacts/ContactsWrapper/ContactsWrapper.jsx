import ContactForm from '../ContactForm';
import FilterByName from '../Filter/Filter';
import ContactList from '../ContactList';
import { LeftBar, RightBar, Wrapper } from './ContactsWrapper.styled';
import Container from 'components/Container/Container';

export const ContactsWrapper = () => {
  return (
    <>
      <Container>
        <ContactForm />
        <FilterByName />
      </Container>

      <Wrapper>
        <LeftBar>
          <ContactList />
        </LeftBar>
        <RightBar></RightBar>
      </Wrapper>
    </>
  );
};
