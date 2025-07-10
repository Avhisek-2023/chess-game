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
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
    ],
    king: [
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
    ],
    hathi: [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ],
  };
  if (type === "pyada") {
    const movement = directions.pyada;
    const startRow = player === "white" ? 6 : 1;
    if (
      isValid(movement[0] + row, movement[1] + col) &&
      !board[movement[0] + row][movement[1] + col].piece
    ) {
      moves.push({
        validRow: movement[0] + row,
        validCol: movement[1] + col,
      });
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

    movement.forEach(([x, y]) => {
      const newRow = x + row;
      const newCol = y + col;

      if (
        isValid(newRow, newCol) &&
        board[newRow][newCol].piece?.player !== board[row][col].piece?.player
      ) {
        moves.push({ validRow: newRow, validCol: newCol });
      }
    });
  } else if (type === "king") {
    const movement = directions.king;

    movement.forEach(([x, y]) => {
      const newRow = x + row;
      const newCol = y + col;

      if (
        isValid(newRow, newCol) &&
        board[newRow][newCol].piece?.player !== board[row][col].piece?.player
      ) {
        moves.push({ validRow: newRow, validCol: newCol });
      }
    });
  } else {
    const movement = directions[type];
    console.log(movement);

    movement.forEach(([x, y]) => {
      let newRow = row + x;
      let newCol = col + y;

      while (isValid(newRow, newCol) && board[newRow][newCol].piece) {
        // console.log(newRow, newCol);

        // moves.push([newRow, newCol]);
        moves.push({ validRow: newRow, validCol: newCol });
        newRow += x;
        newCol += y;
      }
      if (isValid(newRow, newCol) && isOpponent(newRow, newCol, board)) {
        moves.push({ validRow: newRow, validCol: newCol });
      }
    });
  }
  return moves;
};
export const movePiece = (fromRow, fromCol, toRow, toCol, board) => {
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

  const movingPiece = newBoard[fromRow][fromCol].piece;

  newBoard[toRow][toCol].piece = movingPiece;
  newBoard[fromRow][fromCol].piece = null;

  return newBoard;
};

const isOpponent = (r, c, board) =>
  board[r][c].piece && board[r][c].piece.player !== board[r][c].piece.player;
const isValid = (r, c) => r >= 0 && c >= 0 && r < 8 && c < 8;
