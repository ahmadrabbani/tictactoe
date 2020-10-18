import React, {useState} from "react";
import Board from './components/Board';
import {calculateWinner} from './components/winner';
import "./css/root.scss";
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);
  const winner = calculateWinner(board);
  const msg = winner ? `The winner is  ${winner}` : `The next player is ${isX ? 'X' : 'O'}`;
  const handleSquare = (p) => {
      if(board[p] || winner)
        return;
    setBoard( (prev) => {
        return prev.map((S, pos) =>
        {
            if(pos === p)
            {
                return isX ? 'X' : '0';
            }
            return S;
        });
    });
    setIsX(!isX);
  }
  return (
  <div className="app">
    <h1>Tic Tac Toe !!</h1>
  <h2>{msg}</h2>
    <Board board={board} handleSquare={handleSquare}/>
  </div>
)};
export default App;