import axios from 'axios';
import { User } from './types';

const API_URL = 'http://localhost:3000/users';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};

export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await axios.post<User>(API_URL, user);
  return response.data;
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await axios.put<User>(`${API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};