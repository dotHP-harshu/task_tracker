import React, { useEffect, useState, useRef } from "react";

function Timer({ task, isTimerStart, setIsTimerStart }) {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const timeRef = useRef(time);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    let taskTime = task.taskHours * 3600 + task.taskMin * 60 + task.taskSec;
    setTime(parseInt(taskTime));
    timeRef.current = parseInt(taskTime);
  };

  useEffect(() => {
    resetTimer();
  }, [task]);

  useEffect(() => {
    if (isTimerStart) {
      timerRef.current = setInterval(() => {
        if (timeRef.current === 0) {
          setTime(0);
          timeRef.current = 0;
          setIsTimerStart(false);
          clearInterval(timerRef.current);
          return;
        }
        setTime((prev) => prev - 1);
        timeRef.current -= 1;
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerStart]);

  return (
    <div className="p-4 bg-zinc-700 rounded-lg mt-4 flex flex-col gap-4 justify-center items-center text-white">
      <div className="text-4xl flex gap-1 items-end justify-center">
        <span>
          {Math.floor(time / 3600)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor((time % 3600) / 60)
            .toString()
            .padStart(2, "0")}
        </span>
        :
        <span>
          {Math.floor((time % 3600) % 60)
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
