import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets default browser styles for MUI consistency */}
      <UserProvider>
        <Container
          maxWidth='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh', // Full viewport height
            padding: 0, // Remove default padding
          }}>
          <Header />
          <UserList />
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
