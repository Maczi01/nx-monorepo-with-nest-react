import { TodoItem } from './components/TodoItem';
import { Box, Button, buttonClasses, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { BasicModal } from './components/Modal';

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);

  const onClose = () => {
    setOpen(false);
    setEditedTodo(null);
  };

  const handleEdit = (todo: any) => {
    setEditedTodo(todo);
    setOpen(true);
  };

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
        {todos?.map((todo: any) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.checked}
            handleEdit={handleEdit}
          />
        ))}
      </Paper>
    </Box>
  );
};
