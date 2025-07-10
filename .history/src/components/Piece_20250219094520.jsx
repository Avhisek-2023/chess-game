/* eslint-disable react/prop-types */
import BlackHathi from "/images/pieces/black/rook.png";
import BlackGhoda from "/images/pieces/black/knight.png";
import BlackWazir from "/images/pieces/black/bishop.png";
import BlackQueen from "/images/pieces/black/queen.png";
import BlackKing from "/images/pieces/black/king.png";
import whiteHathi from "/images/pieces/white/rook.png";
import whiteGhoda from "/images/pieces/white/knight.png";
import whiteWazir from "/images/pieces/white/bishop.png";
import whiteQueen from "/images/pieces/white/queen.png";
import whiteKing from "/images/pieces/white/king.png";
import blackPyada from "/images/pieces/black/pawn.png";
import whitePyada from "/images/pieces/white/pawn.png";

const Piece = ({ cell, isVisible, handlePieceClick }) => {
  const pieceImages = {
    hathi: { white: whiteHathi, black: BlackHathi },
    ghoda: {
      white: whiteGhoda,
      black: BlackGhoda,
    },
    wazir: {
      white: whiteWazir,
      black: BlackWazir,
    },
    queen: {
      white: whiteQueen,
      black: BlackQueen,
    },
    king: { white: whiteKing, black: BlackKing },
    pyada: { white: whitePyada, black: blackPyada },
  };

  return isVisible ? (
    <div
      className="w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 flex items-center justify-center"
      onClick={() => hand1}
    >
      <img
        src={pieceImages[cell.piece.type][cell.piece.player]}
        alt={""}
        className="w-full h-full"
      />
    </div>
  ) : (
    <></>
  );
};

export default Piece;
