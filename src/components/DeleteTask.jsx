function DeleteTask({ task, setTaskList }) {
  const deleteTask = () => {
    setTaskList((prev) => {
      let tasks = prev.filter((p) => p != task);
      localStorage.setItem("Tasks", JSON.stringify(tasks));
      return tasks;
    });
  };
  return (
    <button
      onClick={deleteTask}
      className="w-full py-2 rounded-lg bg-red-500 cursor-pointer"
    >
      Delete
    </button>
  );
}

export default DeleteTask;
