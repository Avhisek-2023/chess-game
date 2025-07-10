import { createContext, useContext } from "react";
/* eslint-disable react/prop-types */
const PieceContext = createContext({});

export const PieceContextProvider = ({ children }) => {
  return <PieceContext.Provider>{children}</PieceContext.Provider>;
};

export const usePieceContext = () => useContext(PieceContext);
