import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../../../redux/actions';
import { Todo } from '@react-nest-monorepo/types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({
  open,
  onClose,
  editedTodo,
}: {
  open: boolean;
  onClose: () => void;
  editedTodo?: Todo | null;
}) => {
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState(editedTodo?.title || '');

  const handleClose = () => {
    onClose();
    setNewTaskText('');
  };
  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editedTodo
      ? dispatch(
          editTodo({
            ...editedTodo,
            title: newTaskText,
          }),
        )
      : dispatch(
          addTodo({
            id: Math.random() + '999',
            title: newTaskText,
            completed: false,
          }),
        );
    handleClose();
    setNewTaskText('');
    console.log('edited?');
  };
  useEffect(() => {
    setNewTaskText(editedTodo?.title || '');
  }, [editedTodo]);
  return (
    <div>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add todo
          </Typography>
          <form
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            onSubmit={addTaskHandler}
          >
            <input
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder={'Type new to do item...'}
            />
            <button>{editedTodo ? 'Edit' : 'Add'}</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
