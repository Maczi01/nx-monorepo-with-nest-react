import {
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../../redux/actions';
import { Todo } from '@react-nest-monorepo/types';

export const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useDispatch();
  const handleToggleTodo = (todoId: string) => {
    dispatch(toggleTodo(todoId));
  };
  return (
    <>
      <ListItem alignItems="center">
        <ListItemIcon>
          <Checkbox
            edge="start"
            name={'name'}
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
        <EditIcon style={{ fontSize: '1rem' }} />
        <CheckCircleOutlineIcon style={{ fontSize: '1rem', margin: '5px' }} />
      </ListItem>
      <Divider />
    </>
  );
};
