import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
    errorElement: <h1>algo ha salido mal</h1>,
  },
  {
    element: <h1>segmento dinamico op</h1>,
    path: '/category/:category',
    errorElement: <h1>algo ha salido mal</h1>,
  },
]);
