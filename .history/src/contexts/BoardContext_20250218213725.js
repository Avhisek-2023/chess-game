import { createContext } from "react";
/* eslint-disable react/prop-types */
const BoardContext = createContext({});

export const BoardContextProvider = ({ children }) => {
  return <BoardContext.Provider value={{}}>{children}</BoardContext.Provider>;
};
