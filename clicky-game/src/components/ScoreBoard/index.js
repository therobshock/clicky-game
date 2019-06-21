import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div>
      <div className="board">
        <div className="title">Clicky Game</div>
        <div className="dialogue">{props.message}</div>
        <div className="score">Score: {props.score} | Top Score: {props.topScore}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;