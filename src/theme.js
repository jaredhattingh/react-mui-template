import { createTheme } from '@mui/material';

const commonPalette = {
  primary: {
    main: '#C10016'
  },
  secondary: {
    main: '#008bce'
  }
};

const commonTypography = {
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  button: {
    textTransform: 'none',
    lineHeight: 1.6,
    fontWeight: 500
  },
  h1: {
    fontWeight: 500,
    fontSize: '1.2rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  h2: {
    fontWeight: 500,
    fontSize: '1.1rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.0rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  body1: {
    fontSize: '0.85rem',
    letterSpacing: '0em'
  }
};

const lightTheme = createTheme({
  palette: {
    ...commonPalette
  },
  typography: commonTypography
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...commonPalette,
    background: {
      default: '#282c34',
      paper: '#21252b'
    }
  },
  typography: commonTypography
});

const variants = { lightTheme, darkTheme };

export default variants;
