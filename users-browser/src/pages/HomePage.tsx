import React from 'react';
import { Typography, Container } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container sx={{ textAlign: 'center', marginTop: 5 }}>
      <Typography variant='h4'>Welcome</Typography>
      <Typography variant='body1'>This is a demo app.</Typography>
    </Container>
  );
};

export default HomePage;
