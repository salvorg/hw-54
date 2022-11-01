import React from 'react';
import Cell from "./Cell";
import './CellArea.css'

interface Props {
  board: Cells[];
}

interface Cells {
  hasItem: boolean;
  clicked: boolean;
  onBodyClick: React.MouseEventHandler;
  id: number;
}

const CellArea: React.FC<Props> = ({board}) => {
  return (
    <div className='CellArea'>
      {board.map((cell, index) => (
        <Cell
          key={index}
          hasItem={cell.hasItem}
          clicked={cell.clicked}
          onBodyClick={cell.onBodyClick}
          id={index}
        />
      ))}
    </div>
  );
};

export default CellArea;