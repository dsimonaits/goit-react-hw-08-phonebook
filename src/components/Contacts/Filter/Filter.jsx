import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/contacts/filterSlice';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Label } from './Filter.styled';

const FilterByName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const setFilterValue = ({ target: { value } }) => {
    dispatch(filterValue(value));
  };
  return contacts.length === 0 ? (
    <Container>
      <h3>
        {isLoading
          ? 'Loading...'
          : 'Sorry your contact list is empty. Add someone.'}
      </h3>
    </Container>
  ) : (
    <Container>
      <Label>
        Find contacts by name
        <input
          onChange={setFilterValue}
          type="text"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
        />
      </Label>
    </Container>
  );
};

export default FilterByName;
