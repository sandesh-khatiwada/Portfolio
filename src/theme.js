import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#02010A', // Accent color for primary actions
    },
    secondary: {
      main: '#04052E', // Secondary accent
    },
    background: {
      default: '#F3F3F3', // Whitish aesthetic background
      paper: '#FFFFFF', // White for cards and containers
    },
    text: {
      primary: '#02010A', // Darker text
      secondary: '#4A4A4A', // Subtle text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#02010A', // Default text color
    },
  },
});

export default lightTheme;
