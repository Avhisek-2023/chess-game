/* eslint-disable react/prop-types */

const Piece = ({ cell }) => {
  if (!cell.piece) return null; // No piece on this cell

  const { type, player } = cell.piece;
  const pieceImages = {
    hathi: { white: "/pieces/white_rook.png", black: "/pieces/black_rook.png" },
    ghoda: {
      white: "/pieces/white_knight.png",
      black: "/pieces/black_knight.png",
    },
    wazir: {
      white: "/pieces/white_bishop.png",
      black: "/pieces/black_bishop.png",
    },
    queen: {
      white: "/pieces/white_queen.png",
      black: "/pieces/black_queen.png",
    },
    king: { white: "/pieces/white_king.png", black: "/pieces/black_king.png" },
    pyada: { white: "/pieces/white_pawn.png", black: "/pieces/black_pawn.png" },
  };

  return (
    <div className="w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 flex items-center justify-center">
      <img
        src={pieceImages[type][player]}
        alt={`${player} ${type}`}
        className="w-full h-full"
      />
    </div>
  );
};

export default Piece;
