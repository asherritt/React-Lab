import React from 'react';
import { Button, Container } from '@mui/material';
import { useUserContext } from '../context/UserContext';

const column = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,
};

const TestPage: React.FC = () => {
  const { testButton1, testButton2, testButton3 } = useUserContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.getAttribute('data-key')) {
      case '1':
        testButton1();
        break;
      case '2':
        testButton2();
        break;
      case '3':
        testButton3();
        break;
      default:
        console.log('Unknown button clicked');
    }
  };

  return (
    <Container sx={column}>
      <Button data-key={1} variant='contained' onClick={handleClick}>
        Test 1
      </Button>
      <Button data-key={2} variant='contained' onClick={handleClick}>
        Test 2
      </Button>
      <Button data-key={3} variant='contained' onClick={handleClick}>
        Test 3
      </Button>
    </Container>
  );
};

export default TestPage;
