import {
  surroundingCells,
  resultingBoard,
  countOfNeighbours,
  neighborsCount,
  i,
  j,
  rows,
  columns,
} from './game';

describe('Given the initializeGame function', () => {
  describe('When counting neighbors for a specific cell', () => {
    test('The result should be as expected', () => {
      const board = [
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 1, 0],
      ];
      const i = 1;
      const j = 3;
      const expected = 5;

      const neighborsCount = resultingBoard(board, i, j);

      expect(neighborsCount).toBe(expected);
    });
  });
});
