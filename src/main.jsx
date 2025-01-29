import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import darkTheme from './theme';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Use createRoot from react-dom/client
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
