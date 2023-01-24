import ButtonMui from 'components/ButtonMui/ButtonMui';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactWrapper, B } from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(false);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    setBtnState(true);
  };

  return (
    <ContactWrapper>
      <p>
        Name:
        <br /> <B>{name}</B>
      </p>
      <p>
        Number:
        <br /> <B>{number}</B>
      </p>
      <ButtonMui disabled={btnState} onClick={() => handleDelete(id)}>
        {!btnState ? 'Delete' : 'Deleting...'}
      </ButtonMui>
    </ContactWrapper>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
