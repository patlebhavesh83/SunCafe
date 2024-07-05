import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Menu from "./pages/Menu/index.jsx";
import ExploreMoreMenu from "./pages/Menu/ExploreMoreMenu.jsx";
import MenuRouteWrapper from "./pages/Menu/MenuRouteWrapper.jsx";
import SeeMoreMenu from "./pages/Menu/SeeMoreMenu.jsx";
import Cart from "./pages/Cart/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import Account from "./pages/Account/index.jsx";
import Blog from "./pages/Blog/index.jsx";
import BlogRouteWrapper from "./pages/Blog/BlogRouteWrapper.jsx";
import Post from "./pages/Blog/Post.jsx";
export default function App(){
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuRouteWrapper />,
        children: [
          {
            path: "",
            element: <Menu />,
          },
          { path: "explore-more", element: <ExploreMoreMenu /> },
          { path: "see-more", element: <SeeMoreMenu /> },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "blog",
        // element: <Blog />,
        element: <BlogRouteWrapper />,
        children: [
          {
            path: "",
            element: <Blog />,
          },
          {
            path: "post/:slug",
            element: <Post />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
}


// export default App;
