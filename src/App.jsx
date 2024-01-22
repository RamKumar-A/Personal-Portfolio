import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Applayout from './ui/Applayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
