import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CardDetail from './components/CardDetail';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';


function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Toaster />
    </>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout as the parent route
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <CardDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
