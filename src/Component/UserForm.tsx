import React, { useState } from 'react';
import { addUser, updateUser } from '../api';
import { User } from '../types';

interface Props {
  userToEdit?: User;
  onSuccess: () => void;
}

const UserForm: React.FC<Props> = ({ userToEdit, onSuccess }) => {
  const [user, setUser] = useState<Omit<User, 'id'> | User>(
    userToEdit || { name: '', email: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ('id' in user) {
      await updateUser(user);
    } else {
      await addUser(user);
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;