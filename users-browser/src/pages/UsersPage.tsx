import React from 'react';
import { Container } from '@mui/material';
import UserList from '../components/UserList'; // Adjust the import path if needed
import Header from '../components/Header';

const UserPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <UserList />
    </Container>
  );
};

export default UserPage;
