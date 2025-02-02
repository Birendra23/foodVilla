import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/body";
import Footer from "./Components/Footer";
import Cart from "./Components/cart";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";
import Shimmer from "./Components/shimmer";


const Instamart = lazy(() => import("./Components/instamart"));
const About = lazy(() => import("./Components/About"));

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />, // nested route
          },
        ],
      },
      { path: "/", element: <Body /> },
      { path: "/Contact", element: <Contact /> },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    {
      path: "/cart",
      element: <Cart />
    }
    ],
  },
]);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />);
export default App;
