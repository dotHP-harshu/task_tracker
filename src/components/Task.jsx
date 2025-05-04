import { useState } from "react";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import Timer from "./Timer";

function Task({ task, setTaskList }) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  return (
    <div className="bg-zinc-900 w-96  p-4 rounded-sm">
      <h1 className="text-xl font-semibold tracking-tight">{task.taskName}</h1>
      <p className=" task-description-para text-sm mt-4 text-zinc-300  max-h-16 overflow-y-scroll scroll">
        {task.taskDescription}
      </p>
      <Timer
        task={task}
        isTimerStart={isTimerStart}
        setIsTimerStart={setIsTimerStart}
      />
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <EditTask task={task} setTaskList={setTaskList} />
        <DeleteTask task={task} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default Task;
