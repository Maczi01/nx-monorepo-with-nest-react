import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home/Home';
import { DefaultLayout } from './layouts/default-layouts/DefaultLayout';
import { Users } from './features/Users/Users';
import { Settings } from './features/Settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
