/* eslint-disable react/prop-types */

const Piece = ({ cell }) => {
  return (
    <div
      className={`w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 rounded-full shadow-md cursor-pointer flex items-center justify-center
          transition-opacity border-2
          ${
            color === "red"
              ? "bg-red-500 border-red-900"
              : "bg-slate-900 border-gray-700"
          }
          ${isKing ? "border-yellow-500 scale-110" : ""}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={() => handlePieceClick(current_row, current_col)}
    >
      {isKing && (
        <span className="text-lg font-bold text-white sm:text-xl md:text-2xl">
          👑
        </span>
      )}
    </div>
  );
};

export default Piece;
