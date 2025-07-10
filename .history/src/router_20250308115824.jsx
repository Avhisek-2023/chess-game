import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Board from "./components/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/game/:mode",
    element: <Board />,
  },
]);
export default router;
