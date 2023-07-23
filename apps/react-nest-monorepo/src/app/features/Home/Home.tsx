import { TodoItem } from './components/TodoItem';
import { Paper } from '@mui/material';

export const Home = () => {
  return (
    <Paper sx={{ width: '30vw', margin: 3, padding: 2 }}>
      <TodoItem />
      <TodoItem />
    </Paper>
  );
};
