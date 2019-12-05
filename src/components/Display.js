import React from "react";

export const Display = ({ strike, ball, hit }) => {
  return (
    <div className="display-container">
      <div>
        <h1>At Bat</h1>
      </div>
      <div className="score-container">
        <div className="score-card">
          <h2>Balls</h2>
          <p>{ball}</p>
        </div>
        <div className="score-card">
          <h2>Strikes</h2>
          <p>{strike}</p>
        </div>
        <div className="score-card">
          <h2>Runs</h2>
          <p>{hit}</p>
        </div>
      </div>
    </div>
  );
};
