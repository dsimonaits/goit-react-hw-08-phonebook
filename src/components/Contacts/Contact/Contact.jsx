import ButtonMui from 'components/ButtonMui/ButtonMui';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, deleteContact } from 'redux/contacts/operations';
import { ContactWrapper, B, ContactDataWrapper } from './Contact.styled';
import ModalWindow from 'components/Modal/Modal';
import {
  Form,
  Label,
  Input,
  ButtonWrapper,
  DataWrapper,
} from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, [showModal]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    setBtnState(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    return name === 'name' ? setContactName(value) : setContactNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBtnState(true);
    const name = contactName;
    const number = contactNumber;
    const contact = { id, name, number };
    dispatch(updateContact(contact));
    resetForm();
    setBtnState(false);
    setShowModal(false);
  };

  const resetForm = () => {
    setContactName(contactName);
    setContactNumber(contactNumber);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  const AuthContent = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            value={contactName}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </Label>
        <Label>
          Number
          <Input
            value={contactNumber}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </Label>
        <ButtonMui>Edit Contact</ButtonMui>
      </Form>
    );
  };

  const avatar = `https://robohash.org/${name}.png?set=set5`;
  const contactNumberLink = `tel:${number}`;
  return (
    <>
      <ContactWrapper>
        <DataWrapper>
          <ContactDataWrapper>
            {' '}
            <p>
              Name:
              <br /> <B>{name}</B>
            </p>
            <span>
              <p>Number (click to call):</p>
              <a href={contactNumberLink}>
                <b>{number}</b>
              </a>
            </span>
          </ContactDataWrapper>
          <img alt="robot" src={avatar} width="100px"></img>
        </DataWrapper>

        <ButtonWrapper>
          <ButtonMui disabled={btnState} onClick={() => openModal()}>
            {!btnState ? 'Edit' : 'Editing...'}
          </ButtonMui>
          <ButtonMui disabled={btnState} onClick={() => handleDelete(id)}>
            {!btnState ? 'Delete' : 'Deleting...'}
          </ButtonMui>
        </ButtonWrapper>
      </ContactWrapper>
      {showModal && (
        <ModalWindow onClick={closeModal}>{AuthContent()}</ModalWindow>
      )}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
