import { BtnWP } from './ButtonWP.styled';

export const ButtonWP = (props, icon) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span>{props.text}</span>
      <span>{icon}</span>
    </button>
  );
};
