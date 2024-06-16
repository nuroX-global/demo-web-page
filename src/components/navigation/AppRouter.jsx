import React from "react";
import {
  createBrowserRouter,
  Route,
  Router,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Home from "../../views/Home";
import AboutUs from "../../views/AboutUs";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />,
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<Home />} />;
}
