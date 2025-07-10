import { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const PieceContext = createContext({
  board: [[]],
  initializeBoard: () => {},
});

export const PieceContextProvider = ({ children }) => {
  return <PieceContext.Provider>{children}</PieceContext.Provider>;
};

export const useBoardContext = () => useContext(BoardContext);
