import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BoardContextProvider } from "./contexts/BoardContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </StrictMode>
);
