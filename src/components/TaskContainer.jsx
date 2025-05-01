import { useEffect, useState } from "react";
import Task from "./Task";

function TaskContainer({ taskList, setTaskList }) {
  return (
    <div className="flex gap-4 p-6 flex-wrap ">
      {taskList.length === 0 ? (
        <p className="text-base font-bold text-zinc-300">There no tasks.</p>
      ) : (
        taskList
          .slice()
          .reverse()
          .map((task, i) => {
            return <Task key={i} task={task} setTaskList={setTaskList} />;
          })
      )}
    </div>
  );
}

export default TaskContainer;
