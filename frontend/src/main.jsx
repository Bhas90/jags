import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContent from "./App.jsx";
import "./index.css";

// Define routes directly here
const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <AppContent />,
    },
  ],
  {
    // ✅ Enables v7 compatibility, removes warnings
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
