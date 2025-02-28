import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreateUserForm: React.FC = () => {
  const { addUser } = useUserContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      uuid: uuidv4(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      picture: 'https://via.placeholder.com/50', // Placeholder avatar
      phone: formData.phone,
      cell: formData.phone,
      location: {
        city: formData.city,
        country: formData.country,
        street: { number: 0, name: '' }, // Default values
        state: '',
        postcode: '',
        coordinates: { latitude: '0', longitude: '0' },
        timezone: { offset: '', description: '' },
      },
    };

    addUser(newUser);
    navigate('/users'); // Redirect to users list after adding
  };

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant='h5' gutterBottom>
          Create New User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              label='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              label='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label='Phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label='City'
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
            />
            <TextField
              label='Country'
              name='country'
              value={formData.country}
              onChange={handleChange}
              required
            />
            <Button type='submit' variant='contained' color='primary'>
              Create User
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateUserForm;
