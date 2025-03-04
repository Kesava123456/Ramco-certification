import React, { useState } from 'react';
import UserList from './Component/UserList';
import UserForm from './Component/UserForm';
import SearchBar from './Component/SearchBar';
import { User } from './types';

const App: React.FC = () => {
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [searchPattern, setSearchPattern] = useState<string>('');

  return (
    <div>
      <h1>User Management</h1>
      <SearchBar onSearch={setSearchPattern} />
      <UserForm userToEdit={editingUser} onSuccess={() => setEditingUser(undefined)} />
      <UserList onEdit={setEditingUser} searchPattern={searchPattern} />
    </div>
  );
};

export default App;