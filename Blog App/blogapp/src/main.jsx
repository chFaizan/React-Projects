import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import SingleBlog from "./component/SingleBlog.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Service /> },
      { path: "/about", element: <About /> },
      { path: "/blogs/:id", element: <SingleBlog /> },


    ],
  },
  { path: "/register", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
