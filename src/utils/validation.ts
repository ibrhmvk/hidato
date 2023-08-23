const isValidMove = (grid: number[][], row: number, col: number, num: number): boolean => {
    const numRows = grid.length;
    const numCols = grid[0].length;
  
    // Check if the cell is within the grid boundaries
    if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
      return false;
    }
  
    // Check if the cell is empty (value = 0) and not occupied by another number
    if (grid[row][col] !== 0) {
      return false;
    }
  
    // Check if the adjacent cells contain the previous and next numbers
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const newRow = row + dr;
        const newCol = col + dc;
  
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
          if (grid[newRow][newCol] === num - 1 || grid[newRow][newCol] === num + 1) {
            return true;
          }
        }
      }
    }
  
    return false;
  };
  
  export { isValidMove };
  