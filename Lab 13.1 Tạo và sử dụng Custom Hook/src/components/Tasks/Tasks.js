//do
import React from "react";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";
const Tasks = () => {
  return (
    <div className={classes.container}>
      <ul>
        <TaskItem />
      </ul>
    </div>
  );
};

export default Tasks;
