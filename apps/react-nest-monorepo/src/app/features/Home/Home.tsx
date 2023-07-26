import { TodoItem } from './components/TodoItem';
import { Box, Button, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAsyncActionGetUsers } from '../../redux/actions';
import { BasicModal } from './components/Modal';
import { Todo } from '@react-nest-monorepo/types';
import { AppState } from '../../redux/store';

export const Home = () => {
  // const todos = useSelector<RootState, string>(
  const { todos, loading, error } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null);
  console.log('todos: ', todos);
  const onClose = () => {
    setOpen(false);
    setEditedTodo(null);
  };

  const handleEdit = (todo: Todo) => {
    setEditedTodo(todo);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(createAsyncActionGetUsers());
  }, [dispatch]);

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" m={2}>
      <Button color="info" onClick={() => setOpen(true)}>
        Add todo
      </Button>
      <BasicModal open={open} onClose={onClose} editedTodo={editedTodo} />
      <Paper
        sx={{
          width: '30vw',
          margin: 3,
          padding: 2,
        }}
      >
        {loading && <div>Loading...</div>}
        {!!error && <div>Error</div>}
        {todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleEdit={handleEdit}
          />
        ))}
      </Paper>
    </Box>
  );
};
