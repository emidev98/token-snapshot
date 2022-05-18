import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <SnackbarProvider
    autoHideDuration={2000}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </SnackbarProvider>,
  document.getElementById('root')
);
