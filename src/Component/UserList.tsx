import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api';
import { User } from '../types';

interface Props {
  onEdit: (user: User) => void;
  searchPattern: string;
}

const UserList: React.FC<Props> = ({ onEdit, searchPattern }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchPattern.toLowerCase())
  );

  return (
    <ul>
      {filteredUsers.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;