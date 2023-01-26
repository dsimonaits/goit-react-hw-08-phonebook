import { createTheme } from '@mui/material/styles';

const VendorPrefixes = {
  styleOverrides: {
    root: {
      '*': {
        '-webkit-user-select': 'text !important' /* Chrome, Opera, Safari */,
        '-moz-user-select': 'text !important' /* Firefox 2+ */,
        '-ms-user-select': 'text !important' /* IE 10+ */,
        'user-select': 'text !important' /* Standard syntax */,
      },
    },
  },
};

const VendorPrefixesMuiTheme = createTheme({
  components: {
    MuiTextField: VendorPrefixes,
    MuiInput: VendorPrefixes,
    MuiFilledInput: VendorPrefixes,
    MuiOutlinedInput: VendorPrefixes,
  },
});

export default VendorPrefixesMuiTheme;
