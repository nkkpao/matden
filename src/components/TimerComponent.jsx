import React, { useEffect, useRef, useState } from "react";

export const TimerComponent = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(1500);
  const [whiteTime, setWhiteTime] = useState(1500);
  const timer = useRef(null);

  useEffect(() => {
    startTimer();
  });

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === "white"
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(1500);
    setBlackTime(1500);
    restart();
  };

  return (
    <div className="timer-parent">
      <button onClick={handleRestart}>Новая игра</button>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};
