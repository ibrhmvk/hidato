import { isValidMove } from './validation';

const solveHidato = (grid: number[][]) => {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const dfs = (row: number, col: number, num: number): boolean => {
    if (num > numRows * numCols) {
      return true; // Puzzle solved
    }

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (isValidMove(grid, newRow, newCol, num)) {
          grid[newRow][newCol] = num;
          
          if (dfs(newRow, newCol, num + 1)) {
            return true;
          }

          grid[newRow][newCol] = 0; // Backtrack
        }
      }
    }

    return false;
  };

  // Find the starting position
  let startRow = -1;
  let startCol = -1;
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (grid[r][c] === 1) {
        startRow = r;
        startCol = c;
        break;
      }
    }
    if (startRow !== -1) {
      break;
    }
  }

  if (startRow === -1) {
    throw new Error("No starting position found!");
  }

  dfs(startRow, startCol, 2); // Start solving from the second number
  return grid;
};

export default solveHidato;
