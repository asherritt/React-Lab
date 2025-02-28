import React from 'react';
import { Paper, Avatar, Typography, Box, Collapse } from '@mui/material';
import { useUserContext } from './UserContext';

type Props = {
  user: {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
    phone: string;
    location: { city: string; country: string };
  };
  style: React.CSSProperties;
};

const UserListItem: React.FC<Props> = ({ user, style }) => {
  const { selectedUserId, setSelectedUserId } = useUserContext();

  // Determine if this user is expanded
  const isExpanded = selectedUserId === user.uuid;

  const toggleUserDetails = () => {
    setSelectedUserId(isExpanded ? null : user.uuid);
  };

  return (
    <div style={{ ...style, padding: '8px' }} onClick={toggleUserDetails}>
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          padding: 2,
          borderRadius: 2,
          transition: '0.3s ease',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
        }}>
        {/* Main User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={user.picture}
            alt={user.firstName}
            sx={{ width: 48, height: 48, marginRight: 2 }}
          />
          <Box>
            <Typography variant='h6'>{`${user.firstName} ${user.lastName}`}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {user.email}
            </Typography>
          </Box>
        </Box>

        {/* Expanded User Details */}
        <Collapse in={isExpanded} timeout='auto' unmountOnExit>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant='body1'>
              📍 Location: {user.location.city}, {user.location.country}
            </Typography>
            <Typography variant='body1'>📞 Phone: {user.phone}</Typography>
          </Box>
        </Collapse>
      </Paper>
    </div>
  );
};

export default UserListItem;
