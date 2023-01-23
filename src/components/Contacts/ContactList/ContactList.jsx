import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import Contact from '../Contact/Contact';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {' '}
          <Contact name={name} number={number} id={id} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
