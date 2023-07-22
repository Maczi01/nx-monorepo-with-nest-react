import { Header } from './components';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
