import React from "react";
import Task from "./Task";
import Taskform from "./Taskform";

const Tasklist = () => {
  return (
    <div>
      <h2>Task manager</h2>
      <Taskform />
      <div className="--flex-between --pb">
        {" "}
        <p>
          {" "}
          <b> total Tasks:</b>0
        </p>
        <p>
          <b> completed Tasks:</b>0
        </p>
      </div>
      <hr/>
      <Task/>
    </div>
  );
};

export default Tasklist;
