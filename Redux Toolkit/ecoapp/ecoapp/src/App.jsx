import "./App.css";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/allproducts/AllProducts";
import SingleProduct from "./pages/single product/SingleProduct";
import Cart from "./pages/cart/Cart";
import ThankYou from "./components/thanku/Thankyou";
import ErrorPage from "./components/thanku/ErrorPage"; 
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
    const user = useSelector((state) => state.user.currentUser);
    return user ? element : <Login />;
};



const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute element={<Home />} />, 
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/products",
        element: <AllProducts />,
    },
    {
        path: "/products/:id",
        element: <SingleProduct />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/thank-you", 
        element: <ThankYou />,
    },
    {
        path:"*",
        element: <ErrorPage />
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
















//1
// import "./App.css";
// import Home from "./pages/home/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";
// import AllProducts from "./pages/allproducts/AllProducts";
// import SingleProduct from "./pages/single product/SingleProduct";
// import Cart from "./pages/cart/Cart";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ element }) => {
//   const user = useSelector((state) => state.user.currentUser);
//   return user ? element : <Login />;
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProtectedRoute element={<Home />} />, 
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/products",
//     element: <AllProducts />,
//   },
//   {
//     path: "/products/:id",
//     element: <SingleProduct />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

//2

// import './App.css';
// import Home from './pages/home/Home';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// import AllProducts from './pages/allproducts/AllProducts';
// import SingleProduct from './pages/single product/SingleProduct';
// import Cart from './pages/cart/Cart';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/products",
//     element: <AllProducts />,
//   },
//   {
//     path: '/products/:id',
//     element: <SingleProduct />,
//   },
//   {
//     path: '/cart',
//     element: <Cart />,
//   },
  
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
