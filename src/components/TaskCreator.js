import React, { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createNewTask({ name: task, done: false });
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      ></input>
      <button>Save Task</button>
    </form>
  );
};
