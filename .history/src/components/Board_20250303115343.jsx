import { useBoardContext } from "../contexts/BoardContextProvider.jsx";
import Piece from "./Piece";
import background from "/images/wooden-background_24972-623.avif";

import Player1 from "./Player1.jsx";
import Player2 from "./Player2.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar.jsx";
import React from "react";

const Board = () => {
  const {
    board,
    handlePieceClick,
    selected,
    validMoveCells,
    moveHistory,
    sidebar,
    clickSidebar,
  } = useBoardContext();
  console.log(moveHistory);

  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 "
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={clickSidebar}
        className="absolute top-4 right-0 text-white p-2 rounded-full shadow-lg transition-all cursor-pointer"
      >
        <GiHamburgerMenu size={24} />
      </button>
      {sidebar && <Sidebar />}
      <Player1 />
      <div className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] min-w-[300px] aspect-square mx-auto my-auto">
        <div
          className="grid grid-cols-8 relative shadow-md"
          style={{
            transform: "rotateX(20deg)",
            perspective: "1500px",
            boxShadow: "8px 15px 30px 10px rgba(0,0,0,0.4)",
            border: "3px solid #e2d7cd6b",
            borderRadius: "6px",
          }}
        >
          {board.map((row, i) => (
            <React.Fragment key={i}>
              <div
                className="absolute left-0 font-sans text-[12px] text-white md:text-lg"
                style={{
                  top: `${(i + 0.15) * 12.5}%`,
                  transform: "translateY(-50%)",
                }}
              >
                {8 - i}
              </div>
              {row.map((cell, j) => (
                <div
                  key={j}
                  className={`w-full h-full flex items-center justify-center aspect-square transition-all duration-75 ease-in-out
                    ${(i + j) % 2 === 1 ? "bg-[#e2c089]" : "bg-[#b77c4c]"} 
                    ${
                      selected?.row === i && selected?.col === j ? "addBg" : ""
                    } 
                    ${
                      validMoveCells.some(
                        (move) => move.validRow === i && move.validCol === j
                      )
                        ? "addBg1"
                        : ""
                    }`}
                >
                  <Piece
                    cell={cell}
                    isVisible={cell.piece ? true : false}
                    handlePieceClick={handlePieceClick}
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="absolute bottom-2 md:bottom-3 right-1 w-full grid grid-cols-8 text-right text-white  font-sans text-[12px] md:text-lg ">
          {columns.map((col, index) => (
            <div key={index} className="py-1">
              {col}
            </div>
          ))}
        </div>
      </div>
      <Player2 />
    </div>
  );
};

export default Board;
