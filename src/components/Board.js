import { useState } from "react";
import "./Board.css";
import Square from "./Square";

const Board = () => {
  const [squares, setSqaures] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const newSquares = squares.slice(); // 원본 배열 손상없이 수정하기 위해 slice()로 복제
    newSquares[i] = xIsNext ? "X" : "O";
    setSqaures(newSquares);
    setXIsNext((prev) => !prev);
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  return (
    <div>
      <div className="status">Next Player: {xIsNext ? "X" : "O"}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
