import React from 'react';
import { Square } from './Square';

const Board = ({board, handleSquare}) => {
  
  const createSquare = (p) => {
    return (
      <Square
        value={board[p]}
        onClick={() => {
          handleSquare(p);
        }}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
      </div>
      <div className="board-row">
        {createSquare(3)}
        {createSquare(4)}
        {createSquare(5)}
      </div>
      <div className="board-row">
        {createSquare(6)}
        {createSquare(7)}
        {createSquare(8)}
      </div>
    </div>
  );
};

export default Board;
