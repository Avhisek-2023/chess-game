export const getValidMoves = (board, cell) => {
  const { row, col, piece } = cell;
  const { type, player } = piece;
  const moves = [];
  const directions = {
    pyada: player === "white" ? [-1, 0] : [1, 0],
  };
  if (type === "pyada") {
    const movement = directions.pyada;
    const startRow = player === "white" ? 6 : 1;
    if (!board[movement[0] + row][movement[1] + col].piece) {
      moves.push({ validRow: movement[0] + row, validCol: movement[1] + col });
    }
    if(row === startRow && !board[(movement[0]*2) + row][(movement[1]*2) + col].piece)){
        moves.push({ validRow: movement[0]*2 + row, validCol: movement[1] + col });
    }
  }
  return moves;
};
