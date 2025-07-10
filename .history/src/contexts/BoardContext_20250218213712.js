import { createContext } from "react";

const BoardContext = createContext({});

export const BoardContextProvider = ({ children }) => {
  return <BoardContext.Provider value={{}}>{children}</BoardContext.Provider>;
};
