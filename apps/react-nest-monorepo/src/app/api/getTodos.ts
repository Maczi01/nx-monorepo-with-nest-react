import axios from 'axios';

export const getTodos = async () => {
  const response = await axios('http://localhost:3001/api/todo');
  return response.data;
};
