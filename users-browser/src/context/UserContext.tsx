import React, { createContext, useState, useContext } from 'react';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  uuid: string;
  phone: string;
  cell: string;
  location: Location;
};

type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

type UserContextType = {
  users: User[];
  fetchUsers: () => void;
  sortUsers: (order: 'asc' | 'desc') => void;
  selectedUserId: string | null;
  setSelectedUserId: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const NUM_RESULT = 300;

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // ✅ Add selected user state

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${NUM_RESULT}`
      );
      const data = await response.json();
      const fetchedUsers: User[] = data.results.map((user: any) => ({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        picture: user.picture.thumbnail,
        uuid: user.login.uuid,
        phone: user.phone,
        cell: user.cell,
        location: {
          street: {
            number: user.location.street.number,
            name: user.location.street.name,
          },
          city: user.location.city,
          state: user.location.state,
          country: user.location.country,
          postcode: user.location.postcode,
          coordinates: {
            latitude: user.location.coordinates.latitude,
            longitude: user.location.coordinates.longitude,
          },
          timezone: {
            offset: user.location.timezone.offset,
            description: user.location.timezone.description,
          },
        },
      }));

      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const sortUsers = (order: 'asc' | 'desc') => {
    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) =>
        order === 'asc'
          ? a.lastName.localeCompare(b.lastName)
          : b.lastName.localeCompare(a.lastName)
      )
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        sortUsers,
        selectedUserId,
        setSelectedUserId,
      }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing user context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
