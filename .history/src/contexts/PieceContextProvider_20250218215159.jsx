import { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const PieceContext = createContext({
  board: [[]],
  initializeBoard: () => {},
});

export const PieceContextProvider = ({ children }) => {
  return (
    <BoardContext.Provider value={{ board }}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
