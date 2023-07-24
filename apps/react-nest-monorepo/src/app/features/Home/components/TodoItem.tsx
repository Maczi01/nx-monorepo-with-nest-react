import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Todo } from '@react-nest-monorepo/types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

import { deleteTodo, toggleTodo } from '../../../redux/actions';
interface TodoItemProps extends Todo {
  handleEdit: (todo: Todo) => void;
}
export const TodoItem = ({
  id,
  title,
  completed,
  handleEdit,
}: TodoItemProps) => {
  const dispatch = useDispatch();
  const handleToggleTodo = (todoId: string) => {
    dispatch(toggleTodo(todoId));
  };

  const handleDeleteTodo = (todoId: string) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <>
      <ListItem alignItems="center">
        <ListItemIcon>
          <Checkbox
            edge="start"
            name={title}
            tabIndex={-1}
            disableRipple
            onClick={() => handleToggleTodo(id)}
            checked={completed}
          />
        </ListItemIcon>
        <ListItemText>
          <Typography component="span" variant="inherit" color={'textPrimary'}>
            {title}
          </Typography>
        </ListItemText>
        <IconButton onClick={() => handleEdit({ id, title, completed })}>
          <EditIcon style={{ fontSize: '1rem' }} />
        </IconButton>
        <IconButton onClick={() => handleDeleteTodo(id)}>
          <DeleteForeverIcon style={{ fontSize: '1rem', margin: '5px' }} />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};
