import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import InstallBtn from "./components/InstallBtn";

function App() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (savedTasks) {
      setTaskList([...savedTasks]);
    } else {
      setTaskList([]);
    }
  }, []);

  return (
    <main className="w-full min-h-[100dvh] bg-zinc-950 text-white">
      <Header setTaskList={setTaskList} />
      <TaskContainer taskList={taskList} setTaskList={setTaskList} />
      <InstallBtn />
    </main>
  );
}

export default App;
