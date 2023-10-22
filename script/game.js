export const playGame = () => {
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
  /* Console.log(board); */

  const countOfNeighbours = (board, x, y) => {
    const neighbors = [
      [-1, 1],
      [0, 1],
      [1, 1],
      [-1, 0],
      [1, 0],
      [-1, -1],
      [0, -1],
      [1, -1],
    ];

    let total = 0;

    for (const neighbor of neighbors) {
      const nx = x + neighbor[0];
      const ny = y + neighbor[1];
      if (nx >= 0 && ny >= 0 && nx < board.length && ny < board[0].length) {
        total += board[nx][ny];
      }
    }

    return total;
  };

  const resultingBoard = (board, rows, columns) => {
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
  /* Const newBoard = resultingBoard(board, rows, columns);
console.log(newBoard); */

  const initializeGame = () => {
    const printCellsTable = (tableToPrint) => console.table(tableToPrint);

    let round = 0;
    const finalRoundTimer = 5;
    let currentTable;

    const playRound = () => {
      currentTable = resultingBoard(currentTable, rows, columns);
      printCellsTable(currentTable);
      round++;

      if (round < finalRoundTimer) {
        setTimeout(playRound, 2000);
      }
    };

    currentTable = randomBoard(rows, columns);
    printCellsTable(currentTable);

    setTimeout(playRound, 2000);
  };

  setTimeout(() => {
    initializeGame();
  }, 2000);
};
