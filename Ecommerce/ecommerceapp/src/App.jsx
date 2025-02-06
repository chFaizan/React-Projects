import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/Search";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cart={cart} setData={setData} />
          <Product items={data} cart={cart} setCart={setCart} />
        </>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Navbar cart={cart} />
          <ProductDetail cart={cart} setCart={setCart} />
        </>
      ),
    },
    {
      path: "/search/:term",
      element: (
        <>
          <Navbar cart={cart} />
          <SearchItem cart={cart} setCart={setCart} />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar cart={cart} />
          <Cart cart={cart} setCart={setCart} />
        </>
      ),
    },
  ]);

  return (
    <>
      <ToastContainer /> 
      <RouterProvider router={router} />
    </>
  );


};

export default App;
