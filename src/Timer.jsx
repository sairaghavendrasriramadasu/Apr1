import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Watch() {
  const [sec, setSec] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let intervalID;

    if (Running) {
      intervalID = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalID);
  }, [Running]);

  const handlestart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handlereset = () => {
    setRunning(false);
    setSec(0);
  };

  // ✅ Always show HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="watch-container">
      <div className="timer-card">
        <h1 className="timer-title">Stopwatch</h1>
        <div className="timer">{formatTime(sec)}</div>

        <div className="buttons">
          <button className="btn start" onClick={handlestart}>
            Start
          </button>
          <button className="btn stop" onClick={handleStop}>
            Stop
          </button>
          <button className="btn reset" onClick={handlereset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}