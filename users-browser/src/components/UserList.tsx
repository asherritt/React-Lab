import { Paper } from '@mui/material';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useUserContext } from '../context/UserContext';
import { VariableSizeList } from 'react-window';
import UserListItem from './UserListItem';

const DEFAULT_ITEM_HEIGHT = 90;
const EXPANDED_ITEM_HEIGHT = 180;

const UserList: React.FC = () => {
  const { users, selectedUserId } = useUserContext();
  const [listHeight, setListHeight] = useState(window.innerHeight - 200);
  const listRef = useRef<VariableSizeList>(null);

  useEffect(() => {
    const handleResize = () => setListHeight(window.innerHeight - 200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get dynamic height per item
  const getItemSize = useCallback(
    (index: number) =>
      users[index].uuid === selectedUserId
        ? EXPANDED_ITEM_HEIGHT
        : DEFAULT_ITEM_HEIGHT,
    [selectedUserId, users]
  );

  // Reset list layout when selection changes to update heights
  useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0); // Refreshes all items
    }
  }, [selectedUserId]);

  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: 2,
        marginTop: 2,
      }}>
      {users.length > 0 ? (
        <VariableSizeList
          ref={listRef}
          height={listHeight}
          width='100%'
          itemSize={getItemSize}
          itemCount={users.length}
          overscanCount={5}
          style={{
            overflowX: 'hidden',
          }}>
          {({ index, style }) => (
            <UserListItem user={users[index]} style={style} />
          )}
        </VariableSizeList>
      ) : (
        <p>Loading users...</p>
      )}
    </Paper>
  );
};

export default UserList;
