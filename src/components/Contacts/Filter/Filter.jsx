import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/contacts/filterSlice';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Label } from './Filter.styled';
import { CircularProgress } from '@chakra-ui/react';

const FilterByName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const setFilterValue = ({ target: { value } }) => {
    dispatch(filterValue(value));
  };
  return contacts.length === 0 ? (
    <h3>
      {isLoading ? (
        <CircularProgress value={30} size="120px" />
      ) : (
        'Sorry your contact list is empty. Add someone.'
      )}
    </h3>
  ) : (
    <div>
      {' '}
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
    </div>
  );
};

export default FilterByName;
