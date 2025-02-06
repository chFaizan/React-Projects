import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Sucess from "./pages/Sucess";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from './pages/Error';
const App = () => {

  const router = createBrowserRouter([
    {
          path: "/",
          element: <Home />,
    },
    {
      path: "/sucess",
      element: <ProtectedRoute element={<Sucess />} />,
},
{
  path: "/*",
  element: <Error />,
}

  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App