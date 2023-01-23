import { Btn } from './Button.styled';

export const Button = ({ text, clickHandler, disabled = false }) => {
  return (
    <Btn disabled={disabled} clickHandler onClick={clickHandler}>
      {text}
    </Btn>
  );
};
