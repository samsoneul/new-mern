import React from "react";

const Taskform = ({ createTask, name, handleInputChange }) => {
  return (
    <form onSubmit={createTask} className="task-form">
      <input
        type="text"
        placeholder="add a task"
        name="name"
        value={{ name }}
        onChange={handleInputChange}
      />
      <button type="submit"> add</button>
    </form>
  );
};

export default Taskform;
