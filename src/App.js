


import React, { useState } from "react";
import './App.css';

const SquareBox = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const TicTacGameBoard = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] && 
          board[row][0] === board[row][1] && 
          board[row][0] === board[row][2]) {
        return board[row][0];
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] && 
          board[0][col] === board[1][col] && 
          board[0][col] === board[2][col]) {
        return board[0][col];
      }
    }

    // Check diagonals
    if (board[0][0] && 
        board[0][0] === board[1][1] && 
        board[0][0] === board[2][2]) {
      return board[0][0];
    }
    
    if (board[0][2] && 
        board[0][2] === board[1][1] && 
        board[0][2] === board[2][0]) {
      return board[0][2];
    }

    // Check for draw
    if (board.flat().every(cell => cell !== "")) {
      return "draw";
    }

    return null;
  };

  const handleCellClick = (row, col) => {
    if (board[row][col] || winner) return;

    const newBoard = [...board];
    newBoard[row][col] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    
    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="game-container">
        <h1 className="gameTitle">Tic Tac Toe</h1>
        <div className="gameBoard">
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <button
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        className="cell"
                    >
                        {cell}
                    </button>
                ))
            )}
            {winner && (
                <div className="winner-message">
                    {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
                </div>
            )}
        </div>
    </div>
);

};


export default TicTacGameBoard;
