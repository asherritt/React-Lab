import React from 'react';
import { Typography, Container } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container sx={{ textAlign: 'center', marginTop: 5 }}>
      <Typography variant='h4'>Welcome to the App</Typography>
      <Typography variant='body1'>
        Use the navigation above to browse users.
      </Typography>
    </Container>
  );
};

export default HomePage;
