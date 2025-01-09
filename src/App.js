import React from "react";
import './App.css';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const GameBoard = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = React.useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board">
      {board.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default GameBoard;
