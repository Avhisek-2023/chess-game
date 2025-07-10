/* eslint-disable react/prop-types */

import { pieceImages } from "./PieceLoader";

const Piece = ({ cell, isVisible, handlePieceClick }) => {
  return (
    <div
      className={`w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 flex items-center justify-center cursor-pointer $`}
      onClick={() => handlePieceClick(cell)}
      draggable
      onDrag={handleDragStart}
    >
      {isVisible ? (
        <img
          src={pieceImages[cell.piece.type][cell.piece.player]}
          alt={""}
          className="w-full h-full"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Piece;
