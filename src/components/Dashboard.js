import React, { useState } from "react";
import { Display } from "./Display";
import { strikeOrBall } from "../utils/strikeOrBall";

export const Dashboard = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);

  const playerHitTheBall = v => {
    setStrike(0);
    setBall(0);
    setHit(v + 1);
  };

  const foulBall = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    } else {
      console.log("FOUL DOESNT CHANGE STRIKE...");
      return strike;
    }
  };

  const reset = () => {
    setStrike(0);
    setBall(0);
    setHit(0);
    console.log("YOU KINDA SUCK");
  };

  // STRIKE OUT //
  if (strike > 3) {
    setStrike(0);
    setBall(0);
  }
  if (ball > 4) {
    setStrike(0);
    setBall(0);
  }

  return (
    <>
      <Display strike={strike} ball={ball} hit={hit} />
      <div>
        <button
          data-testid="strike-button"
          onClick={() => setStrike(strikeOrBall(strike))}
        >
          Strike
        </button>
        <button onClick={() => setBall(strikeOrBall(ball))}> Ball </button>
        <button onClick={() => foulBall()}> Foul </button>
        <button onClick={() => playerHitTheBall(hit)}> Hit </button>
        <button onClick={() => reset()}> RESET </button>
      </div>
    </>
  );
};
