import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import SortSelector from './SortSelector';

type Props = {};

const Header: React.FC<Props> = ({}) => {
  const { fetchUsers, users, sortUsers } = useUserContext();

  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6'>User Browser</Typography>
        <Button variant='contained' onClick={fetchUsers}>
          LOAD
        </Button>
        <SortSelector />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
