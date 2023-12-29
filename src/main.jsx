import React from "react";
import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:name",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Normalize />
    <RouterProvider router={router} />
  </React.StrictMode>
);
