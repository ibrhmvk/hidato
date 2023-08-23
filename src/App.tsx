import { useState } from "react";
import PuzzleGrid from "./components/PuzzleGrid";
import SolverControls from "./components/SolverControls";
import solveHidato from "./utils/hidatoSolver";

const App = () => {
  const numRows = 5;
  const numCols = 3;

  const initialGrid = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 0)
  );

  const [grid, setGrid] = useState<number[][]>(initialGrid);

  const handleCellChange = (row: number, col: number, value: string) => {
    const newGrid = [...grid];
    newGrid[row][col] = parseInt(value) || 0;
    setGrid(newGrid);
  };

  const solvePuzzle = () => {
    const solvedGrid = solveHidato(grid);
    setGrid(solvedGrid);

    if (isPuzzleSolved(solvedGrid)) {
      alert("Congratulations! You solved the puzzle!");
    } else {
      alert("Sorry! Try agian");
    }
  };
  const isPuzzleSolved = (solvedGrid: number[][]) => {
    for (let r = 0; r < solvedGrid.length; r++) {
      for (let c = 0; c < solvedGrid[0].length; c++) {
        if (solvedGrid[r][c] !== 0 && solvedGrid[r][c] !== 1) {
          let isValid = false;

          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const newRow = r + dr;
              const newCol = c + dc;

              if (
                newRow >= 0 &&
                newRow < solvedGrid.length &&
                newCol >= 0 &&
                newCol < solvedGrid[0].length &&
                solvedGrid[newRow][newCol] === solvedGrid[r][c] - 1
              ) {
                isValid = true;
                break;
              }
            }
          }

          if (!isValid) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const clearGrid = () => {
    const emptyGrid = Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => 0)
    );
    setGrid(emptyGrid);
  };

  return (
    <div>
      <h1>Hidato Puzzle Solver</h1>
      <PuzzleGrid grid={grid} handleCellChange={handleCellChange} />
      <SolverControls solvePuzzle={solvePuzzle} clearGrid={clearGrid} />
    </div>
  );
};

export default App;
