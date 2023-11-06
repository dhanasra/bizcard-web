import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from './utils/theme';
import AppRouter from './routes/routes';
import { Provider } from 'react-redux';
import { AppStore } from './features/app/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={AppStore}>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
