import React, { useState, useEffect, useRef } from "react";

export const AxaxaComponent = () => {
  const initialAxaxaState = "AXAXA";
  const initialIntervalState = 1000;
  let addedString = "xa";

  const [axa, setAxa] = useState(initialAxaxaState);
  const [intervalTime, setIntervalTime] = useState(initialIntervalState);

  const timer = useRef(null);

  useEffect(() => {
    handlePlay();
  });

  function plusHa() {
    setAxa((axa) => (axa += addedString));
  }

  function handlePlay() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = plusHa;
    timer.current = setInterval(callback, intervalTime);
  }

  function handlePause() {
    clearInterval(timer.current);
  }

  function handleReboot() {
    setAxa((axa) => (axa = initialAxaxaState));
  }

  function handleSlower() {
    setIntervalTime((interval) => (interval *= 2));
    handlePlay();
  }

  function handleFaster() {
    setIntervalTime((interval) => (interval /= 2));
    handlePlay();
  }

  return (
    <div className="axaxa">
      <span>{axa}</span>
      <button onClick={handleReboot}>reboot</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleFaster}>faster</button>
      <button onClick={handleSlower}>slower</button>
    </div>
  );
};
