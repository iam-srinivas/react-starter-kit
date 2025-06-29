import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let appTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect for all buttons
      },
    },
  },
});

appTheme = responsiveFontSizes(appTheme);

export default appTheme;
