export const getValidMoves = (board, cell) => {
  const { row, col, piece } = cell;
  const { type, player } = piece;
  const moves = [];
  const directions = {
    pyada: player === "white" ? [-1, 0] : [1, 0],
    ghoda: [
      [-2, 1],
      [-2, -1],
      [2, 1],
      [2, -1],
    ],
  };
  if (type === "pyada") {
    const movement = directions.pyada;
    const startRow = player === "white" ? 6 : 1;
    if (!board[movement[0] + row][movement[1] + col].piece) {
      moves.push({ validRow: movement[0] + row, validCol: movement[1] + col });
    }
    if (
      row === startRow &&
      !board[movement[0] * 2 + row][movement[1] * 2 + col].piece
    ) {
      moves.push({
        validRow: movement[0] * 2 + row,
        validCol: movement[1] * 2 + col,
      });
    }
  } else if (type === "ghoda") {
    const movement = directions.ghoda;
    console.log(movement);

    movement.forEach(([move]) => {
      console.log(move);

      const newRow = move[0] + row;
      const newCol = move[1] + col;

      // console.log(newRow, newCol);

      if (
        isValid(newRow, newCol) &&
        board[newRow][newCol].piece.player !== board[row][col].piece.player
      ) {
        moves.push({ validRow: newRow, validCol: newCol });
      }
    });
  }
  return moves;
};

const isValid = (r, c) => r >= 0 && c >= 0 && r < 8 && c < 8;
