import ContactForm from '../ContactForm';
import FilterByName from '../Filter/Filter';
import ContactList from '../ContactList';
import { LeftBar, RightBar, Wrapper } from './ContactsWrapper.styled';

export const ContactsWrapper = () => {
  return (
    <>
      <Wrapper>
        <ContactForm />
        <FilterByName />
      </Wrapper>

      <Wrapper>
        <LeftBar>
          <ContactList />
        </LeftBar>
        <RightBar></RightBar>
      </Wrapper>
    </>
  );
};
