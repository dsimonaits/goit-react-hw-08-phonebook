import { ButtonMuiStyled } from './ButtonMui.styled';

export default function ButtonMui({ children, color, onClick, disabled }) {
  return (
    <div>
      <ButtonMuiStyled
        onClick={onClick}
        variant="contained"
        size="small"
        color={color}
        type="submit"
        disabled={disabled}
      >
        {children}
      </ButtonMuiStyled>
    </div>
  );
}
