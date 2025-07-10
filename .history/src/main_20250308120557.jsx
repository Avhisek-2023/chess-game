import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BoardContextProvider } from "./contexts/BoardContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardContextProvider>
      <RouterProvider router={router} />
    </BoardContextProvider>
  </StrictMode>
);
