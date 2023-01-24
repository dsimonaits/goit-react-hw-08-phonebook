import { Backdrop, Modal, BtnClose } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWindow = ({ children, onClick }) => {
  return (
    <>
      <Backdrop className="backdrop" onClick={onClick}>
        <Modal className="modal">
          <BtnClose className="modal_close" onClick={onClick}>
            <AiOutlineClose />
          </BtnClose>
          {children}
        </Modal>
      </Backdrop>
    </>
  );
};

export default ModalWindow;
