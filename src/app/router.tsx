import { paths } from '@/config/paths';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const HomePage = lazy(() => import('./routes/HomePage'));

const router = createBrowserRouter([
  {
    path: paths.home.path,
    Component: HomePage,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
