import { Button } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useState } from 'react';
import { useUserContext } from './UserContext';

const SortSelector = () => {
  const { sortUsers } = useUserContext();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    sortUsers(newOrder); // Trigger sorting in UserContext
  };

  return (
    <Button
      variant='contained'
      color='primary'
      onClick={toggleSort}
      startIcon={
        sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward />
      }></Button>
  );
};

export default SortSelector;
