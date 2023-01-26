import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonMuiStyled = styled(Button)`
  height: 30px;

  &.MuiButton-contained {
    font-size: 12px;
    padding: 5px;
    min-width: 80px;
  }
`;
