import { Header } from './components';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center">
        <Outlet />
      </Box>
    </>
  );
};
