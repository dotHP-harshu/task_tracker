import { useEffect, useState } from "react";

function EditTask({ task, setTaskList }) {
  const [isShowingEdit, setIsShowingEdit] = useState(false);

  const [taskName, setTaskName] = useState(task.taskName);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [taskHours, setTaskHours] = useState(task.taskHours);
  const [taskMin, setTaskMin] = useState(task.taskMin);
  const [taskSec, setTaskSec] = useState(task.taskSec);

  const handleForm = (e) => {
    e.preventDefault();
    setIsShowingEdit(false);
    setTaskList((prev) => {
      let tasks = prev.map((p) =>
        p === task
          ? { taskName, taskDescription, taskHours, taskMin, taskSec }
          : p
      );
      localStorage.setItem("Tasks", JSON.stringify(tasks));
      return tasks;
    });
  };

  return (
    <>
      <button
        onClick={() => {
          setIsShowingEdit(!isShowingEdit);
        }}
        className="w-full py-2 rounded-lg border-2 border-white cursor-pointer"
      >
        Edit
      </button>

      {isShowingEdit && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-transparent backdrop-blur-sm">
          <div className="pop-up bg-zinc-800 w-lg p-4 ">
            <div className="flex justify-between items-center">
              <h1 className="capitalize text-lg tracking-tight font-semibold">
                add new task
              </h1>
              <button
                onClick={() => {
                  setIsShowingEdit((prev) => !prev);
                }}
                className="semibold cursor-pointer p-1 font-semibold"
              >
                X
              </button>
            </div>
            <form className=" w-full mt-4 flex flex-col items-end">
              <div className="w-full ">
                <label
                  htmlFor="task-name"
                  className="uppercase tracking-wide text-xs block"
                >
                  task name
                </label>
                <input
                  required
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  type="text"
                  id="task-name"
                  placeholder="Task Name"
                  className="bg-zinc-700 px-2 py-1 w-full outline-none mt-2 focus:bg-zinc-600"
                />
              </div>

              <div className="flex w-full gap-1 mt-4">
                <span className="flex flex-col gap-2 w-20">
                  <label htmlFor="hr" className="text-sm font-semibold pl-1">
                    Hr
                  </label>
                  <input
                    value={taskHours}
                    onChange={(e) => {
                      setTaskHours(e.target.value);
                    }}
                    id="hr"
                    className="bg-zinc-700 px-2 py-1 outline-none w-20"
                    maxLength={2}
                    min={0}
                    type="number"
                    placeholder="Hr"
                  />
                </span>

                <span className="flex flex-col gap-2 w-20">
                  <label htmlFor="min" className="text-sm font-semibold pl-1">
                    Min
                  </label>
                  <input
                    value={taskMin}
                    onChange={(e) => {
                      setTaskMin(e.target.value);
                    }}
                    id="min"
                    className="bg-zinc-700 px-2 py-1 outline-none w-20"
                    maxLength={2}
                    min={0}
                    max={60}
                    type="number"
                    placeholder="Mi"
                  />
                </span>

                <span className="flex flex-col gap-2 w-20">
                  <label htmlFor="sec" className="text-sm font-semibold pl-1">
                    Sec
                  </label>
                  <input
                    id="sec"
                    value={taskSec}
                    onChange={(e) => {
                      setTaskSec(e.target.value);
                    }}
                    className="bg-zinc-700 px-2 py-1 outline-none w-20"
                    maxLength={2}
                    min={1}
                    max={60}
                    type="number"
                    placeholder="Se"
                  />
                </span>
              </div>

              <div className="w-full mt-6 ">
                <label
                  htmlFor="task-description"
                  className="uppercase tracking-wide text-xs block"
                >
                  task description
                </label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  type="text"
                  id="task-description"
                  placeholder="Task Description"
                  className="bg-zinc-700 px-2 py-1 w-full outline-none mt-2 focus:bg-zinc-600 resize-none  min-h-60"
                ></textarea>
              </div>
              <button
                onClick={handleForm}
                className="text-white mt-6 bg-blue-500 text-base font-semibold px-6 py-1 rounded-lg cursor-pointer"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTask;
