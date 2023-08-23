import React from "react";

interface SolverControlsProps {
  solvePuzzle: () => void;
  clearGrid: () => void;
}

const SolverControls: React.FC<SolverControlsProps> = ({ solvePuzzle, clearGrid }) => {
  return (
    <div className="controls">
      <button onClick={solvePuzzle}>Solve Puzzle</button>
      <button onClick={clearGrid}>Clear Grid</button>
    </div>
  );
};

export default SolverControls;
