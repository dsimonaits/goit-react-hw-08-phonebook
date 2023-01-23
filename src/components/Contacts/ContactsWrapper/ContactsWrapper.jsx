import ContactForm from '../ContactForm';
import FilterByName from '../Filter/Filter';
import ContactList from '../ContactList';
import { LeftBar, RightBar, Wrapper } from './ContactsWrapper.styled';

export const ContactsWrapper = () => {
  return (
    <>
      <FilterByName />
      <Wrapper>
        <LeftBar>
          <ContactList />
        </LeftBar>
        <RightBar>
          <ContactForm />
        </RightBar>
      </Wrapper>
    </>
  );
};
