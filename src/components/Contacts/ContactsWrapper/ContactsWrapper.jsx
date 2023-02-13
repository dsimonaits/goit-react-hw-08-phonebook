import ContactForm from '../ContactForm';
import FilterByName from '../Filter/Filter';
import ContactList from '../ContactList';
import {
  LeftBar,
  Wrapper,
  ContactsListWrapper,
  FormWrapper,
} from './ContactsWrapper.styled';

export const ContactsWrapper = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <ContactForm />
        <FilterByName />
      </FormWrapper>

      <ContactsListWrapper>
        <LeftBar>
          <ContactList />
        </LeftBar>
        {/* <RightBar></RightBar> */}
      </ContactsListWrapper>
    </Wrapper>
  );
};
