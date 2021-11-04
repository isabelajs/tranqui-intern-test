import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import theme from './App/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';



ReactDOM.render(

  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,

  document.getElementById('root')
);