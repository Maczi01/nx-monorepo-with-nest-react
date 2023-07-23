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

export const TodoItem = ({
  author = 'Default Author',
  checked = true,
}: {
  author: string;
  checked: boolean;
}) => {
  return (
    <>
      <ListItem alignItems="center">
        <ListItemIcon>
          <Checkbox
            edge="start"
            name={'name'}
            tabIndex={-1}
            disableRipple
            checked={checked}
          />
        </ListItemIcon>
        <ListItemText>
          <Typography component="span" variant="inherit" color={'textPrimary'}>
            {author}
          </Typography>
        </ListItemText>
        <EditIcon style={{ fontSize: '1rem' }} />
        <CheckCircleOutlineIcon style={{ fontSize: '1rem', margin: '5px' }} />
      </ListItem>
      <Divider />
    </>
  );
};
