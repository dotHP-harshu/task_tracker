import React, { useEffect, useState, useRef } from "react";

function Timer() {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [time, setTime] = useState(0);

  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerStart(false);
    setTime(0);
  };

  useEffect(() => {
    if (isTimerStart) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerStart]);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg mt-4 flex flex-col gap-4 justify-center items-center text-white">
      <div className="text-4xl flex gap-1 items-end justify-center">
        <span>
          {Math.floor(time / 3600000)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor((time % 3600000) / 60000)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor(((time % 3600000) % 60000) / 1000)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span className="text-base">
          {Math.floor((time % 1000) / 10)
            .toString()
            .padStart(2, "0")}
        </span>
      </div>

      <div className="flex gap-4">
        <button
          className={`${
            isTimerStart ? "text-red-500" : "text-green-400"
          } text-base outline-none bg-zinc-900 rounded-lg px-4 py-2 cursor-pointer`}
          onClick={() => setIsTimerStart((prev) => !prev)}
        >
          {isTimerStart ? "Stop" : "Start"}
        </button>

        <button
          onClick={resetTimer}
          className="text-red-500 text-base outline-none bg-zinc-900 rounded-lg px-4 py-2 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
