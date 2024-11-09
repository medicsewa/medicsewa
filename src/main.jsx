import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/home.page"));
const PrivacyPage = loadable(() => import("./pages/privacy.page"));
const ErrorPage = loadable(() => import("./pages/error.page"));
const PlaygroundPage = loadable(() => import("./pages/playground.page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <PrivacyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/playground",
    element: <PlaygroundPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </React.StrictMode>
);
