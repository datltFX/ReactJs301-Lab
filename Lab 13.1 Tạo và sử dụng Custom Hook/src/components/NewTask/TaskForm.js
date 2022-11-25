import React, { useState } from "react";
import useHttp from "../../Hooks/useHttp";
import classes from "./TaskForm.module.css";
const TaskForm = () => {
  const { postData, isloading, error } = useHttp();
  const [input, setInput] = useState("");
  //submit upload
  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      postData(
        "https://react-http-a1e7c-default-rtdb.firebaseio.com/tasks.json",
        input
      );
    }
    setInput("");
  };

  //render
  return (
    <form className={classes.form}>
      <input
        type="text"
        required
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={submitHandler}>
        {isloading ? "Sending..." : "Add Task"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TaskForm;
