import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import HomePage from './pages/HomePage';
import UserPage from './pages/UsersPage';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <AppBar position='static'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={NavLink}
                to='/'
                color='inherit'
                sx={{ textDecoration: 'none' }}>
                Home
              </Button>
              <Button
                component={NavLink}
                to='/users'
                color='inherit'
                sx={{ textDecoration: 'none' }}>
                Users
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container sx={{ marginTop: 4 }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UserPage />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
};

export default App;
