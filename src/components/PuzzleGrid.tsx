import React from 'react';

interface PuzzleGridProps {
  grid: number[][];
  handleCellChange: (row: number, col: number, value: string) => void;
}

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ grid, handleCellChange }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="number"
              value={cell}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PuzzleGrid;
