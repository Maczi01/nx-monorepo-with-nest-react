import { TodoItem } from './components/TodoItem';
import { Button, buttonClasses, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(
      addTodo({
        id: 3,
        title: 'string',
        completed: true,
      }),
    );
    console.trace();
  };

  return (
    <>
      <Button onClick={handleAction} color="primary">
        {' '}
        Handle Action
      </Button>
      <Paper
        sx={{
          width: '30vw',
          margin: 3,
          padding: 2,
        }}
      >
        {todos?.map((todo: any) => (
          <TodoItem key={todo.id} title={todo.title} checked={todo.checked} />
        ))}
      </Paper>
    </>
  );
};
