import React, { useState, useEffect, useRef } from "react";

export const AxaxaComponent = () => {
  const [axa, setAxa] = useState("axaxa");

  const timer = useRef(null);

  useEffect(() => {
    startTimer();
  });

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = plusHa;
    timer.current = setInterval(callback, 1000);
  }

  function plusHa() {
    setAxa((axa) => (axa += "xa"));
  }

  return (
    <div className="axaxa">
      <span>{axa}</span>
      <button onClick={plusHa}>+xa</button>
    </div>
  );
};
