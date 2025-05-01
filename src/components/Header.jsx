import AddTask from "./AddTask";

function Header({ setTaskList }) {
  return (
    <div className="w-full p-10 relative ">
      <h1 className="text-3xl font-semibold">Task Tracker</h1>
      <p className="mt-6 text-zinc-300">
        Click <span className="text-blue-500">New</span> to add task.
      </p>
      <AddTask setTaskList={setTaskList} />
    </div>
  );
}

export default Header;
