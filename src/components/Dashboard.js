import React, { useState } from "react";
import { Display } from "./Display";

export const Dashboard = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setfoul] = useState(0);
  const [hit, setHit] = useState(0);
  return (
    <>
      <Display />
      <div>
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
        <button>Hit</button>
      </div>
    </>
  );
};
