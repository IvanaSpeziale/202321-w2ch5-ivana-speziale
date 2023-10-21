const rows = 6;
const columns = 6;

const randomBoard = (rows, cols) => {
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }

  return board;
};

const board = randomBoard(rows, columns);
console.log(board);

const countOfNeighbours = (board, x, y) => {
  const neighbors = [
    [-1, -1],
    [-1, 1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let total = 0;

  for (let i = 0; i < neighbors.length; i++) {
    const nx = x + neighbors[i][0];
    const ny = y + neighbors[i][1];

    if (nx >= 0 && ny >= 0 && nx < board.length && ny < board[0].length) {
      total += board[nx][ny];
    }
  }

  return total;
};

const resultingBoard = (board) => {
  const newBoard = [];
  for (let i = 0; i < rows; i++) {
    newBoard[i] = [];
    for (let j = 0; j < columns; j++) {
      const surroundingCells = countOfNeighbours(board, i, j);

      if (board[i][j] === 1) {
        if (surroundingCells > 3 || surroundingCells < 2) {
          newBoard[i][j] = 0;
        } else {
          newBoard[i][j] = 1;
        }
      } else if (surroundingCells === 3) {
        newBoard[i][j] = 1;
      } else {
        newBoard[i][j] = 0;
      }
    }
  }

  return newBoard;
};

const x = 1;
const y = 3;

const neighborsCount = countOfNeighbours(board, x, y);
console.log(`vecinos vivos (${x}, ${y}): ${neighborsCount}`);
