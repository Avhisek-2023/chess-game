export const getValidMoves = (board, cell) => {
  const { type, player } = cell.piece;
  const moves = [];
  const directions = {
    pyada: player === "",
  };
};
