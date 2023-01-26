import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectUserRefreshCompleted } from 'redux/auth/auth-selectors';
import { fetchContacts } from 'redux/contacts/operations';
import 'react-toastify/dist/ReactToastify.css';
import Section from 'components/Section/Section';
import { ContactsWrapper } from 'components/Contacts/ContactsWrapper/ContactsWrapper';

export const Contacts = () => {
  const dispatch = useDispatch();
  const refreshingComplete = useSelector(selectUserRefreshCompleted);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, refreshingComplete]);

  return (
    <Section>
      <ContactsWrapper />
    </Section>
  );
};
